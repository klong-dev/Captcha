<template>
  <div class="content">
    <div class="row d-flex main-content">
      <div class="menu col-lg-4">
        <h3 class="title">MENU TÀI KHOẢN</h3>
        <div class="menuTK">
          <ul>
            <li>
              <a href="index.html"><i class="bi bi-person-fill"></i>Thông tin tài khoản</a>
            </li>
            <li>
              <a href="index.html"><i class="bi bi-bell-fill"></i>Thông báo</a>
            </li>
            <li>
              <a href="index.html"><i class="bi bi-key-fill"></i>Đổi Mật Khẩu</a>
            </li>
            <li>
              <a href="index.html"><i class="bi bi-clock-history"></i>Lịch sử giao dịch</a>
            </li>
            <li>
              <a href="index.html"><i class="bi bi-box-arrow-right"></i>Đăng xuất</a>
            </li>
          </ul>
        </div>
        <h3 class="title">MENU GIAO DỊCH</h3>
        <div class="menuThe">
          <ul>
            <li>
              <a href="index.html"><i class="bi bi-credit-card-fill"></i>Nạp thẻ</a>
            </li>
            <li>
              <a href="index.html"><i class="bi bi-credit-card-fill"></i>Nạp ATM/VÍ</a>
            </li>
            <li>
              <a href="index.html"><i class="bi bi-send"></i>Chuyển tiền</a>
            </li>
            <li>
              <a href="index.html"><i class="bi bi-tools"></i>Quản lý CAPTCHA</a>
            </li>
            <li>
              <a href="index.html"><i class="bi bi-tools"></i>Quản lý VPS</a>
            </li>
          </ul>
        </div>
      </div>
      <div class="tt col-11 col-lg-7">
        <div class="avatar d-flex justify-content-center align-items-center">
          <img src="/assets/images/avatar.png" alt="avatar" class="rounded-circle" />
        </div>
        <!---Ten Tai Khoan-->
        <h4 class="name text-center">Huy Đẹp Chai</h4>
        <h5 class="chucVu text-center">Thành Viên</h5>
        <h3 class="title">THÔNG TIN TÀI KHOẢN</h3>
        <div class="tt row">
          <div class="muc display-flex flex-direction-column">
            <ul class="d-flex justify-content-between hang so1">
              <li class="col-4 text-left">Tài Khoản</li>
              <li class="col-4 text-center">huyne2503</li>
              <li class="col-3 text-right">
                <button><i class="bi bi-eye"></i>Xem</button>
              </li>
            </ul>
            <ul class="d-flex justify-content-between hang so2">
              <li class="col-4 text-left">Họ và Tên</li>
              <li class="col-4 text-center">Huy</li>
              <li class="col-3 text-right">
                <button><i class="bi bi-pencil-square"></i>Sửa</button>
              </li>
            </ul>
            <ul class="d-flex justify-content-between hang so3">
              <li class="col-4 text-left">Số Dư</li>
              <li class="col-4 text-center">1 Tỷ</li>
              <li class="col-3 text-right">
                <button><i class="bi bi-credit-card-fill"></i>Nạp</button>
              </li>
            </ul>
            <ul class="d-flex justify-content-between hang so4">
              <li class="col-4 text-left">Email</li>
              <li class="col-4 text-center">lehuy25032004@gmail.com</li>
              <li class="col-3 text-right">
                <button><i class="bi bi-pencil-square"></i>Sửa</button>
              </li>
            </ul>
            <ul class="d-flex justify-content-between hang so5">
              <li class="col-4 text-left">Hoạt Động</li>
              <li class="col-4 text-center">Bây tự ghi vô đi</li>
              <li class="col-3 text-right">
                <button><i class="bi bi-eye"></i>Xem</button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="css" scoped>
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
