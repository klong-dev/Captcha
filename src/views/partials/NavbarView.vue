<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <div class="header">
    <div class="row d-flex justify-content-between">
      <div class="col-5 d-none d-sm-block">
        <div class="nav-left">
          <img src="@/assets/images/logo2.png" alt="logo" />
          <RouterLink to="/">Trang chủ</RouterLink>
          <a href="#">Hỗ trợ</a>
          <RouterLink to="/pay">Nạp tiền</RouterLink>
        </div>
      </div>
      <div class="col-7 d-none d-sm-block">
        <div v-if="!store.isLoggedIn" class="nav-right">
          <RouterLink to="/login"><i class="bi bi-box-arrow-in-right"></i> Đăng Nhập</RouterLink>
          <RouterLink to="/signup"><i class="bi bi-person-check"></i> Đăng Ký</RouterLink>
        </div>
        <div v-else class="nav-right navPhai">
          <ul class="menu">
            <li class="dropdown">
              <h3 class="user"><i class="bi bi-person-check iconDaDangNhap"></i>{{ store.user.full_name }}</h3>
              <ul class="dropdown_menu">
                <li class="soTien">
                  <h5>{{ store.user.money.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.') }}đ</h5>
                </li>
                <li class="li1">
                  <RouterLink to="/profile"> <i class="bi bi-person-fill"></i> Thông tin tài khoản </RouterLink>
                </li>
                <li class="li2">
                  <a href="#" @click="logout()"><i class="bi bi-box-arrow-right"></i>Đăng xuất</a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>

  <nav class="navbar navbar-expand-sm bg-light navbar-light d-sm-none fixed-top">
    <div class="container-fluid">
      <a class="navbar-brand" href="#"> <img src="@/assets/images/logo2.png" alt="logo" style="height: 40px" /></a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="collapsibleNavbar">
        <ul class="navbar-nav me-auto">
          <li class="nav-item">
            <a class="nav-link" href="index.html">Trang chủ</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Hỗ trợ</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="napTien.html">Nạp tiền</a>
          </li>
        </ul>
        <ul v-if="!store.isLoggedIn" class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link" href="dangNhap.html"><i class="bi bi-box-arrow-in-right"></i> Đăng Nhập</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="dangKy.html"><i class="bi bi-person-check"></i> Đăng Ký</a>
          </li>
        </ul>
        <ul v-else class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link" href="#"> <i
                class="bi bi-person-check iconDaDangNhap"></i>{{ $cookies.get('user').username }}</a>
            <!--Link nay de chuyen ve trang Thong Tin Tai Khoan-->
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <!--Kết thúc header-->
</template>
<script>
// load the isSignedIn variable from user.js in store
import { useStore } from '../../stores/user.js'
import axios from 'axios';
export default {
  data() {
    return {
      store: useStore()
    }
  },
  methods: {
    logout() {
      this.$swal('Đăng xuất thành công', '', 'success')
      this.$cookies.remove('user')
      this.store.logout()
      this.$router.push('/')
    },
    async relogin() {
      if (this.$cookies.get('user') != null || this.$cookies.get('user') != undefined) {
        const res = await axios.post('https://run.captchanro.com/product/load', {
          username: this.$cookies.get('login_data').username,
          password: this.$cookies.get('login_data').password
        })
        if (res.data.error_code === 0) {
          this.store.setUser(res.data.user);
          this.$cookies.set('user', JSON.stringify(res.data.user))
          this.store.login()
        } else {
          this.store.login()
          this.$router.push('/login')
          this.$cookies.remove('login_data')
          this.$cookies.remove('user')
          this.store.logout()
        }
      }
    }
  },
  mounted() {
    // check if the user is logged in
    if (this.$cookies.get('user') != null) {
      this.store.login()
    }
    // relogin when user reload page
    this.relogin()
  }
}
</script>
<style lang="scss" scoped>
//Da dang nhap
.bi-person-fill {
  color: #2b00fe;
  margin-right: 5px;
  font-size: 130%;
}

.bi-box-arrow-right {
  color: #dc3545;
  margin-right: 5px;
  font-size: 130%;
}

.soTien {
  border-top: none !important;
  border-left: none !important;
  border-right: none !important;
  border-bottom: 0.2px solid gray !important;
  margin: 5px auto;
}

.soTien>h5 {
  margin: 0 auto;
  color: #dc3545;
}

.li1>a {
  color: black;
  margin: 10px auto;
}

.li1:hover>a {
  color: #2b00fe;
}

.li2>a {
  color: black;
  margin: 10px auto;
}

.li2:hover>a {
  color: #dc3545;
}

.navPhai {
  border: none;
  margin-top: 10px !important;
  /* Tắt border của .navPhai */
}

.navPhai *:not(.soTien) {
  border: 0 !important;
  /* Tắt border cho tất cả các phần tử con bên trong .navPhai */
}

.navPhai a {
  text-decoration: none;
  /* Tắt decoration (ví dụ: underline) cho các liên kết */
}

.user {
  margin: 0;
}

.menu {
  list-style: none;
  border: 0 !important;
  margin: 0;
  margin-right: 5%;
}

.dropdown>h3 {
  color: #198754;
}

.dropdown:hover>h3 {
  color: #14cf78;
}

.iconDaDangNhap {
  margin-right: 8px !important;
}

.dropdown_menu {
  margin-top: 5px;
  align-items: start;
  display: none;
  position: absolute;
  width: 98%;
  background-color: #f9f9f9;
  border: 2px solid rgb(157, 154, 154) !important;
  box-shadow: 0 0 10px 5px rgba(206, 205, 205, 0.5);
  z-index: 999;
}

.dropdown_menu li {
  display: block;
  margin: 10px auto;
  padding-right: 0px;
  text-align: left;
}

.dropdown:hover .dropdown_menu,
.dropdown_menu:hover {
  display: block;
}

//ket thuc da dang nhap
.header {
  background-color: #ffffffe6;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;

  &>.row {
    padding-bottom: 10px;
    padding-top: 10px;
  }
}

.nav-left {
  display: flex;
  justify-content: start;
  margin-top: 10px;
  margin-left: 10px;

  &>a {
    margin-top: 20px;
    text-decoration: none !important;
    color: black;
    font-weight: 700;
  }

  * {
    margin-right: 20px;
    text-align: center;
  }
}

.nav-right {
  display: flex;
  justify-content: end;
  margin-right: 30px;
  margin-top: 28px;

  * {
    margin-left: 20px;
    text-align: center;
    border: 2px solid;
    padding: 5px 0px;
    font-weight: 700;
    text-decoration: none !important;
  }

  &>a {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    color: white;
    border: 2px solid #198754;
    background: #198756;
    border-radius: 5px;
    padding: 0 15px;

    &:first-child {
      display: inline-flex;
      justify-content: center;
      align-items: center;
      color: white;
      border: 2px solid #dc3545;
      background: #dc3545;
      border-radius: 5px;
      padding: 0 10px;

      &:hover {
        color: black;
        border: 2px solid #dc3545;
        background: #dc3545;
        border-radius: 5px;
      }
    }

    &>.bi-box-arrow-in-right {
      margin-left: 0px;
      margin-right: 5px;
      border: 0px;
      padding-left: 0px;
      padding-right: 0px;
    }

    &:hover {
      color: black;
      border: 2px solid #198754;
      background: #198756;
      border-radius: 5px;
    }
  }
}

.bi-person-check {
  margin-left: 0px;
  margin-right: 5px;
  border: 0px;
  padding-left: 0px;
  padding-right: 0px;
}

@media (max-width: 576px) {
  .header {
    margin-bottom: 60px;
  }
}
</style>
