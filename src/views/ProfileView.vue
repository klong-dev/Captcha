<template>
  <div class="content">
    <div class="row d-flex main-content">
      <div class="menu col-lg-4">
        <h3 class="title">MENU TÀI KHOẢN</h3>
        <div class="menuTK">
          <ul>
            <li>
              <RouterLink to="/profile"><i class="bi bi-person-fill"></i>Thông tin tài khoản</RouterLink>
            </li>
            <li>
              <a href="#"><i class="bi bi-bell-fill"></i>Thông báo</a>
            </li>
            <li>
              <a href="#"><i class="bi bi-key-fill"></i>Đổi Mật Khẩu</a>
            </li>
            <li>
              <a href="#"><i class="bi bi-clock-history"></i>Lịch sử giao dịch</a>
            </li>
            <li>
              <a href="#" @click="logout()"><i class="bi bi-box-arrow-right"></i>Đăng xuất</a>
            </li>
          </ul>
        </div>
        <h3 class="title">MENU GIAO DỊCH</h3>
        <div class="menuThe">
          <ul>
            <li>
              <RouterLink to="/pay"><i class="bi bi-credit-card-fill"></i>Nạp thẻ</RouterLink>
            </li>
            <li>
              <RouterLink to="/pay"><i class="bi bi-credit-card-fill"></i>Nạp ATM/VÍ</RouterLink>
            </li>
            <li>
              <a href="#"><i class="bi bi-tools"></i>Quản lý CAPTCHA</a>
            </li>
          </ul>
        </div>
      </div>
      <div class="tt col-11 col-lg-7">
        <div class="avatar d-flex justify-content-center align-items-center">
          <img src="/assets/images/avatar.png" alt="avatar" class="rounded-circle" />
        </div>
        <!---Ten Tai Khoan-->
        <h4 class="name text-center">{{ $cookies.get('user').full_name }}</h4>
        <h5 class="chucVu text-center">Thành Viên</h5>
        <h3 class="title">THÔNG TIN TÀI KHOẢN</h3>
        <div class="tt row">
          <div class="muc display-flex flex-direction-column">
            <ul class="d-flex justify-content-between hang so1">
              <li class="col-4 text-left">Tài Khoản</li>
              <li class="col-4 text-center">{{ $cookies.get('user').username }}</li>
              <li class="col-3 text-right">
                <button><i class="bi bi-eye"></i>Xem</button>
              </li>
            </ul>
            <ul class="d-flex justify-content-between hang so2">
              <li class="col-4 text-left">Họ và Tên</li>
              <li class="col-4 text-center">{{ $cookies.get('user').full_name }}</li>
              <li class="col-3 text-right">
                <button><i class="bi bi-pencil-square"></i>Sửa</button>
              </li>
            </ul>
            <ul class="d-flex justify-content-between hang so3">
              <li class="col-4 text-left">Số Dư</li>
              <li class="col-4 text-center">{{ $cookies.get('user').money.toLocaleString() }}đ</li>
              <li class="col-3 text-right">
                <button><i class="bi bi-credit-card-fill"></i>Nạp</button>
              </li>
            </ul>
            <ul class="d-flex justify-content-between hang so4">
              <li class="col-4 text-left">Email</li>
              <li class="col-4 text-center">{{ $cookies.get('user').email }}</li>
              <li class="col-3 text-right">
                <button><i class="bi bi-pencil-square"></i>Sửa</button>
              </li>
            </ul>
            <ul class="d-flex justify-content-between hang so5">
              <li class="col-4 text-left">Trạng thái</li>
              <li class="col-4 text-center" :style="'color: ' + ($cookies.get('user').status === 0 ? 'green' : 'red')">{{ $cookies.get('user').status === 0 ? 'Đang hoạt động' : 'Tạm khóa' }}</li>
              <li class="col-3 text-right">
                <button><i class="bi bi-eye"></i>Xem</button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="content list-product">
    <div class="row d-flex justify-content-center">
      <div class="col-lg-6 col-sm-10">
        <h2 class="api-name">API CAPTCHA:</h2>
        <div class="row d-flex align-items-center justify-content-evenly" v-for="(api, index) in list_api" :key="index">
          <div class="col-2">
            <button class="btn btn-primary">Copy API</button>
          </div>
          <div class="col-7">
            <input type="text" readonly class="api_name_input" :value="'http://captchanro.com/captcha/solve?token=' + api" />
          </div>
          <div class="col-2">
            <button class="btn btn-danger" @click="deleteAPI(api)">Xóa API</button>
          </div>
        </div>
      </div>
      <div class="col-12 d-flex justify-content-center">
        <button class="btn btn-warning" style="margin-top: 20px" @click="createAPI()">Tạo thêm API</button>
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
      list_api: [],
      store: useStore()
    }
  },
  methods: {
    loadAPI() {
      axios
        .post('http://localhost:3000/token/load', { uid: this.$cookies.get('user').uid })
        .then((res) => {
          this.list_api = res.data
          console.log(this.list_api)
        })
        .catch((err) => {
          console.log(err)
        })
    },
    createAPI() {
      axios.post('http://localhost:3000/token/add', { uid: this.$cookies.get('user').uid }).then(() => {
        this.loadAPI()
      })
    },
    deleteAPI(token) {
      axios.post('http://localhost:3000/token/delete', { uid: this.$cookies.get('user').uid, token: token }).then(() => {
        this.loadAPI()
      })
    },
    logout() {
      this.$swal('Đăng xuất thành công', '', 'success')
      this.$cookies.remove('user')
      this.store.logout()
      this.$router.push('/')
    }
  },
  mounted() {
    this.loadAPI()
  }
}
</script>

<style lang="css" scoped>
.api-name {
  text-align: center;
}
.api_name_input {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-top: 10px;
  margin-bottom: 10px;
}
.list-product {
  margin-top: 50px;
  padding: 20px 0;
}
.content {
  margin-left: 2%;
  width: 96%;
  background-color: white;
  box-shadow: 0 0 10px 5px rgba(128, 128, 128, 0.5);
}
.main-content {
  padding: 30px;
}
.col-3.text-right {
  display: flex;
  justify-content: flex-end;
}
i {
  margin-right: 6px;
  font-size: 130%;
}
.menuTK > ul > li:nth-child(1) > a > i {
  color: #2b00fe;
}
.menuTK > ul > li:nth-child(2) > a > i {
  color: green;
}
.menuTK > ul > li:nth-child(3) > a > i {
  color: #e6994d;
}
.menuTK > ul > li:nth-child(4) > a > i {
  color: #dc3545;
}
.menuTK > ul > li:nth-child(5) > a > i {
  color: #994de6;
}

.menuThe > ul > li:nth-child(1) > a > i {
  color: red;
}
.menuThe > ul > li:nth-child(2) > a > i {
  color: green;
}
.menuThe > ul > li:nth-child(3) > a > i {
  color: plum;
}
.menuThe > ul > li:nth-child(4) > a > i {
  color: #994de6;
}
.menuThe > ul > li:nth-child(5) > a > i {
  color: #198756;
}
.menuTK ul,
.menuThe ul {
  list-style: none;
  padding: 0;
  margin: 30px auto 10px 100px;
}

.menuTK ul li,
.menuThe ul li {
  margin-bottom: 25px;
}
.menu > .title {
  margin-left: 90px;
  font-weight: 700;
}
.menu h3:nth-child(3) {
  margin-top: 50px;
}

.menuTK ul li a,
.menuThe ul li a {
  text-decoration: none;
  font-weight: 700;
  color: #101e2c;
}

.menuTK ul li a:hover,
.menuThe ul li a:hover {
  color: rgb(25, 25, 236);
}

.avatar > img {
  margin-top: 50px;
  border: 2px solid gray;
  width: 25%;
  height: auto;
  box-shadow: 0 0 10px 5px aqua;
}

.name {
  margin-top: 20px;
  font-weight: 700;
}
.chucVu {
  margin-top: 15px;
  color: #2b00fe;
  font-weight: 600;
  margin-bottom: 10%;
}
.tt {
}
.muc {
  width: 100%;
}
.title {
  font-weight: 1000;
  margin-bottom: 40px;
}
.hang li {
  display: inline-block;
  font-weight: 600;
  font-size: 20px;
}
.so3 li:nth-child(2) {
  color: red;
}
.hang li button {
  padding: 5px 15px;
  border-radius: 8%;
  border: none;
}
ul.so1 {
  padding: 5px 0;
}
ul.so2 {
  padding: 5px 0;
}
ul.so3 {
  padding: 5px 0;
}
ul.so4 {
  padding: 5px 0;
}
ul.so5 {
  padding: 5px 0;
}
ul.so1:hover {
  background-color: #cfd1d4;
  border-radius: 2%;
}
ul.so2:hover {
  background-color: #cfd1d4;
  border-radius: 2%;
}
ul.so3:hover {
  background-color: #cfd1d4;
  border-radius: 2%;
}
ul.so4:hover {
  background-color: #cfd1d4;
  border-radius: 2%;
}
ul.so5:hover {
  background-color: #cfd1d4;
  border-radius: 2%;
}
.bi-eye {
  font-size: 100%;
  margin-right: 8px;
}
.bi-pencil-square {
  font-size: 100%;
  margin-right: 11px;
}
.bi-credit-card-fill {
  font-size: 100%;
  margin-right: 11px;
}
.so1 button {
  background-color: #dc3545;
  color: white;
  font-weight: 600;
}
.so1 button:hover {
  background-color: #ba0719;
  color: white;
  font-weight: 600;
  cursor: pointer;
}
.so2 button {
  background-color: rgb(129, 54, 194);
  color: white;
  font-weight: 600;
}
.so2 button:hover {
  background-color: rgb(102, 0, 192);
  color: white;
  font-weight: 600;
  cursor: pointer;
}
.so3 button {
  background-color: rgb(14, 170, 214);
  color: white;
  font-weight: 600;
}
.so3 button:hover {
  background-color: rgb(0, 138, 224);
  color: white;
  font-weight: 600;
  cursor: pointer;
}
.so4 button {
  background-color: #198754;
  color: white;
  font-weight: 600;
}
.so4 button:hover {
  background-color: darkgreen;
  color: white;
  font-weight: 600;
  cursor: pointer;
}
.so5 button {
  background-color: #dc3545;
  color: white;
  font-weight: 600;
}
.so5 button:hover {
  background-color: #ba0719;
  color: white;
  font-weight: 600;
  cursor: pointer;
}
</style>
