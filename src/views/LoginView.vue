<script setup>
import { RouterLink } from 'vue-router'
</script>
<template>
  <div class="content">
    <div class="row d-flex justify-content-center main-content">
      <div class="col-xl-11 col-md-11 col-lg-5 dangNhap">
        <div class="header-form">
          <h5>Đăng Nhập</h5>
        </div>
        <form class="body-form" @submit.prevent="handleSubmit">
          <div class="input-group row d-flex justify-content-center">
            <label for="account" class="col-xl-4 col-5">Tài Khoản & Email</label>
            <input type="text" v-model="username" id="account" class="col-5" />
          </div>

          <div class="input-group row d-flex justify-content-center matKhau">
            <label for="password" class="col-xl-4 col-5">Mật Khẩu</label>
            <input type="password" v-model="password" id="password" class="col-5" />
          </div>
          <div class="row justify-content-center setup">
            <div class="nhoTaiKhoan">
              <input type="checkbox" id="myCheckbox" />
              <label for="myCheckbox">Nhớ Tài Khoản</label>
            </div>
            <div class="quenMatKhau">
              <a href="#">Quên Mật Khẩu?</a>
            </div>
          </div>

          <div class="row justify-content-center">
            <input type="submit" class="btn btn-primary col-5" id="submit" value="Đăng Nhập" />
          </div>
          <div class="c-line-center"></div>
          <h6 class="text-center">Chưa có tài khoản?</h6>
          <div class="row justify-content-center dangKy">
            <RouterLink to="/signup" class="text-center col-5 dangKy">Đăng Ký</RouterLink>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
import { useStore } from '../stores/user'
export default {
  data() {
    return {
      username: '',
      password: '',
      store: useStore()
    }
  },
  methods: {
    async handleSubmit() {
      try {
        const res = await axios.post('http://localhost:3000/login/validate', {
          username: this.username,
          password: this.password
        })
        if (res.data.error_code === 0) {
          this.$swal('Đăng nhập thành công', '', 'success')
          this.$cookies.set('user', JSON.stringify(res.data.user))
          this.store.login()
          this.$router.push('/')
        } else {
          this.$swal('Đăng nhập thất bại', 'Tài khoản hoặc mật khẩu không đúng', 'error')
        }
      } catch (error) {
        console.log(error)
      }
    }
  }
}
</script>
<style lang="css" scoped>
.c-line-center {
  background-color: #1ca823;
  height: 3px;
  margin: 10px auto 10px auto;
  width: 70px;
}

.content {
  margin-left: 2% !important;
  width: 96% !important;
  background-color: white;
  box-shadow: 0 0 10px 5px rgba(128, 128, 128, 0.5);
}
.main-content {
  width: 33%;
}
.dangNhap {
  width: 100%;
  background-color: #212529;
  margin: 20px 20px 20px 0;
  padding: 0 !important;
  border-radius: 4px;
  box-shadow: 0 0 10px 5px rgba(128, 128, 128, 0.3);
}

.dangNhap > .header-form {
  background-color: #0d6efd;
  padding: 10px 0;
  text-align: center;
  border-radius: 4px;
}
.dangNhap > .header-form > h5 {
  color: white;
  margin: 5px auto;
}

.dangNhap > .body-form {
  border-radius: 4px;
  margin: 20px 0;
  color: white;
}
.dangNhap .input-group {
  margin-bottom: 30px;
}
.dangNhap > .body-form > input {
  padding: 5px 0px 5px 0;
  width: 70%;
  margin-bottom: 15px;
}
.dangNhap label {
  text-align: right;
  padding-right: 10px;
  padding-left: 0;
}
.dangNhap > .body-form > h2 {
  color: white;
  margin-left: 105px;
}
.dangNhap > .body-form > button {
  background-color: #198754;
  color: white;
  border: 0;
  border-radius: 4px;
  padding: 10px 70px 10px 70px;
}

.dangNhap > .body-form > a {
  background-color: navy;
  text-decoration: none !important;
  padding: 10px 30px 10px 30px;
  margin-left: 94px;
  border: 0;
  border-radius: 4px;
}
.matKhau {
  margin-bottom: 20px !important;
}
.nhoTaiKhoan {
  text-align: center;
  margin-bottom: 15px;
}
.nhoTaiKhoan > label {
  margin: 0px;
  margin-left: 5px;
}
.quenMatKhau {
  text-align: center;
}
.quenMatKhau > a {
  text-decoration: none;
}
.quenMatKhau > a:hover {
  color: green;
  text-decoration: none;
}
.setup {
  margin-bottom: 20px;
}
input[type='submit']:hover {
  color: black;
}

.dangKy > a {
  color: white;
  border: 2px solid #198754;
  background: #198756;
  border-radius: 4px;
  border-width: 0.8px;
  text-decoration: none !important;
  margin: 10px auto;
  padding: 6px 12px;
}

.dangKy:hover > a {
  color: black;
}

/* Mobile Version */
@media (max-width: 576px) {
  .content {
    margin: 10px auto !important;
    width: 96% !important;
    padding: 10px;
  }

  .main-content {
    width: 100% !important;
  }

  .dangNhap {
    margin: 20px auto !important;
    width: 100% !important;
  }

  .dangNhap > .body-form > input,
  .dangNhap > .body-form > a {
    width: 100% !important;
    margin: 0 auto;
    text-align: center;
  }

  .dangKy > a {
    width: 42% !important;
    text-align: center;
    margin: 0 auto;
  }
}
</style>
