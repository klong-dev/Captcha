<template>
  <div class="content">
    <div class="row d-flex main-content">
      <div class="menu col-xl-4">
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
      <div class="nap col-xl-7 col-11">
        <div class="c-line-center"></div>
        <h3>NẠP ATM/VÍ</h3>
        <div class="c-line-center"></div>
        <div class="nap-header row">
          <img src="@/assets/images/bank.png" alt="logo" class="col-xl-3 col-6" />
          <div class="text col-xl-7 col-9">
            <p>Chuyển khoản qua Ngân hàng & ví điện tử</p>
            <p>Chuyển khoản ngân hàng online</p>
          </div>
        </div>
        <div class="c-line-center"></div>
        <div class="nap-content">
          <p>*Nạp ATM/MOMO/VÍ ( Được 100% Giá Trị Nạp )</p>
          <p>*Tạo QR chỉ cần quét và thanh toán</p>
          <p>*Nạp >= 10.000VNĐ</p>
          <p>Ví Dụ:</p>
          <p>100k<span>ATN/MOMO/Ví = </span>100k Trên Shop</p>
          <p>500k<span>ATN/MOMO/Ví = </span>500k Trên Shop</p>
          <p>Lưu ý<span>: Chuyển sai nội dung pm góc phảo để xử lý</span></p>

          <p>THÔNG TIN TÀI KHOẢN NGÂN HÀNG</p>
          <p><i class="bi bi-check-lg"></i>:MB Bank ( Ngân Hàng Quân Đội )</p>
          <p>Chủ tài khoản: NGUYEN QUOC THUONG</p>
          <p>STK/SĐT<span>1950199997236</span></p>

          <div class="soTien row">
            <label for="nap">Số tiền cần nạp: </label>
            <input type="number" id="nap" />
            <button>Tạo QR Bank</button>
          </div>
        </div>
        <div class="napTien row">
          <p class="col-xl-5 col-5">Nội dung chuyển khoản của bạn:</p>
          <div class="col-xl-6 col-6 d-flex align-items-center taoMa">
            <input type="text" id="autoCode" class="form-control" value="longpro2k9" readonly />
            <button type="button" class="btn btn-secondary mx-2" onclick="generateCode()">
              Tạo Mã
            </button>
            <button type="button" class="btn btn-primary" @click="copyInput()">Sao Chép</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    copyInput() {
      const input = document.getElementById('autoCode');
      input.select();
      document.execCommand('copy');
    },
  },
}
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

.nap {
  border-left: 0.5px solid #b0b4b8;
}
.nap * {
  margin-left: 10px;
}
.nap > h3 {
  font-weight: 700;
  margin-bottom: 10px;
  padding-bottom: 15px 0;
}
.nap > .c-line-center:first-child {
  display: none;
}
.nap-header > img {
  max-width: 10%; /* Đảm bảo hình ảnh không vượt quá chiều rộng của phần tử cha */
  height: auto; /* Chiều cao tự động điều chỉnh để giữ tỷ lệ khung hình */
  width: 50px; /* Kích thước chiều rộng mới */
  height: 50px; /* Kích thước chiều cao mới */
}
.nap-header > .text {
  text-align: left;
  margin-left: 0px;
  padding-left: 0px;
}
.nap-header > .text > p {
  margin-bottom: 0px;
  font-weight: 500;
}
.nap-header > .text > p:nth-child(2) {
  font-size: 12px;
  font-weight: 500;
}

.nap-content > p:first-child {
  margin-top: 20px;
}
.nap-content > p {
  font-weight: 700;
  color: #994de6;
}
.nap-content > p:nth-child(4) {
  color: #e6994d;
}

.nap-content > p:nth-child(5) {
  color: #e64d4d;
}

.nap-content > p:nth-child(5) > span {
  color: #994de6;
}

.nap-content > p:nth-child(6) {
  color: #e64d4d;
}
.nap-content > p:nth-child(6) > span {
  color: #994de6;
}

.nap-content > p:nth-child(7) {
  color: #e6994d;
}
.nap-content > p:nth-child(7) > span {
  color: #f00;
}

.nap-content > p:nth-child(8) {
  margin-top: 50px;
  font-weight: bold;
  color: #101e2c;
}
.nap-content > p:nth-child(9) {
  color: #2b00fe;
}
.nap-content > p:nth-child(10) {
  color: #101e2c;
}
.nap-content > p:nth-child(11) {
  color: #101e2c;
}
.nap-content > p:nth-child(11) > span {
  color: #f00;
}
.soTien {
  margin-bottom: 80px;
}
.soTien > label {
  font-weight: bold;
}
.soTien > button {
  font-weight: bold;
  border-radius: 4px;
}
.soTien > button:hover {
  font-weight: bold;
  color: #e3e6e9;
  background-color: #38495a;
  border-radius: 4px;
}
.napTien > p {
  font-weight: bold;
}

/* Content */

@media (max-width: 576px) {
  .c-line-center {
    background-color: #b0b4b8;
    height: 0.5px;
    margin: 10px auto 10px auto;
    width: 110%;
  }
  .nap > .c-line-center:first-child {
    display: block;
  }
  .nap > h3 {
    padding: 10px 0;
  }
  .nap-header > img {
    margin-top: 10px;
    height: 50px !important;
    width: 90px !important;
  }
  .text > p:nth-child(1) {
    margin-bottom: 10px;
  }
  .taoMa {
    flex-direction: column;
    justify-content: center;
    padding-left: 0 !important;
    margin-left: 0;
  }
  .taoMa * {
    margin-bottom: 15px;
  }
  .btn {
    margin-left: 0;
    margin-right: 0;
  }
  .content {
    width: 96%;
    background-color: white;
    box-shadow: 0 0 10px 5px rgba(128, 128, 128, 0.5);
    margin-top: 30px;
    margin-left: 2%;
    margin-right: 0;
  }
  .menu {
    padding: 0;
    margin-bottom: 20px;
    padding-left: 20px !important;
  }
  .main-content {
    padding: 15px;
  }

  .menuTK ul,
  .menuThe ul {
    margin-left: 0;
  }
  .menu h3:nth-child(1) {
    padding-top: 30px;
  }
  .menu h3:nth-child(3) {
    margin-top: 30px;
  }

  .menu > .title {
    margin-left: 0;
    padding-top: 20px;
  }

  .nap-header > img {
    max-width: 20%;
    width: 30px;
    height: 30px;
  }

  .soTien {
    margin-bottom: 40px;
  }
}
</style>
