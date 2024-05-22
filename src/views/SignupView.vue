<template>
  <div class="content">
      <div class="row d-flex justify-content-center">
        <div class="col-11 col-md-11 col-lg-4 dangKy">
          <div class="header-form">
            <h5>Đăng Ký</h5>
          </div>
          <form class="body-form" action="#" method="post">
            <div class="input-group row d-flex justify-content-center">
              <label for="name" class="col-xl-3 col-4">Họ và Tên (*): </label>
              <input type="text" id="name" class="col-5" />
            </div>

            <div class="input-group row d-flex justify-content-center">
              <label for="username" class="col-xl-3 col-4"
                >Tài Khoản (*):
              </label>
              <input type="text" id="username" class="col-5" />
            </div>

            <div class="input-group row d-flex justify-content-center">
              <label for="password" class="col-xl-3 col-4"
                >Mật Khẩu (*):
              </label>
              <input type="password" id="password" class="col-5" />
            </div>
            <div class="input-group row d-flex justify-content-center">
              <label for="email" class="col-xl-3 col-4">Email (*): </label>
              <input type="text" id="email" class="col-5" />
            </div>
            <div class="row justify-content-center">
              <input
                type="submit"
                class="btn btn-primary col-5"
                id="submit"
                value="Đăng Ký"
              />
            </div>
            <div class="c-line-center"></div>
            <h6 class="text-center">Đã có tài khoản?</h6>

            <div class="row justify-content-center">
              <a class="text-center col-5 dangNhap" href="dangNhap.html"
                >Đăng nhập</a
              >
            </div>
          </form>
        </div>
        <div class="col-xl-3 col-11 rules">
          <div class="header-rules">
            <h5>Quy Tắc</h5>
          </div>
          <div class="body-rules">
            <p>-Tài khoản chỉ được dùng a-z 0-9!</p>
            <p>-Nhập đúng địa chỉ Email thật để lấy lại Password khi quên!</p>
            <p>
              -Tài khoản tối thiểu 6 ký tự và tối đa 40 ký tự, không được là một
              con số!
            </p>
            <p>-Mật khẩu tối thiểu 6 ký tự, phải bao gồm chữ và số!</p>
          </div>
        </div>
      </div>
    </div>
</template>
<script>
export default {

}
</script>
<style lang="css" scoped>
.content {
    margin-left: 2%;
    width: 96%;
    background-color: white;
    box-shadow: 0 0 10px 5px rgba(128, 128, 128, 0.5);
}
.dangKy {
    background-color: #212529;
    margin: 20px 20px 20px 0;
    padding: 0 !important;
    border-radius: 4px;
    box-shadow: 0 0 10px 5px rgba(128, 128, 128, 0.3);
}

.dangKy > .header-form{
    background-color: #198754;
    padding: 10px 0;
    text-align: center;
    border-radius: 4px;
}
.dangKy > .header-form > h5 {
    color: white;
}

.dangKy > .body-form {
    border-radius: 4px;
    margin: 20px 0;
    color: white;
}
.dangKy .input-group {
    margin-bottom: 30px;
}
.dangKy > .body-form > input {
    padding: 5px 0px 5px 0;
    width: 70%;
    margin-bottom: 15px;
}
.dangKy     label {
    text-align: right;
}
.dangKy > .body-form > h2 {
    color: white;
    margin-left: 105px;
}
.dangKy > .body-form > button {
    background-color: #198754;
    color: white;
    border: 0;
    border-radius: 4px;
    padding: 10px 70px 10px 70px;
    
}

.dangKy > .body-form > a {
    background-color: navy;
    text-decoration: none !important;
    padding: 10px 30px 10px 30px;
    margin-left: 94px;
    border: 0;
    border-radius: 4px;
}
.row > .btn {
    margin-bottom: 10px;
}
.row > .text-center {
    margin-top: 10px;
    margin-bottom: 10px;
}
.row > .dangNhap {
    border-width: 0.8px !important;
    border: #dc3545 solid;
    padding: 5px 11.5px;
    border-radius: 4px;
    background-color: #dc3545;
    text-decoration: none !important;
    color: white;
}
.rules {
    background-color: #212529;
    margin: 20px 20px 200px 0;
    padding: 0 !important;
    border-radius: 4px;
    box-shadow: 0 0 10px 5px rgba(128, 128, 128, 0.3);
}
.rules > .header-rules {
    background-color: #198754;
    padding: 10px 10px 10px 0px;
    text-align: center;
    border-radius: 4px;
}
.rules > .header-rules > h5 {
    color: white;
}

.rules > .body-rules {
    padding-top: 20px;
    padding-left: 10px;
    color: white;
}

/* Mobile Version */
@media (max-width: 576px) {
    .content {
        margin-left: 0;
        margin-top: 30px;
        width: 100%;
        padding: 10px auto;
        padding-left: 0;
    }
    .content > .row {
        margin-right: 0;
    }
    .dangKy,
    .rules {
        margin: 20px 0;
    }

    .dangKy > .body-form > input,
    .rules > .body-rules {
        width: 100%;
    }

    .dangKy > .body-form > button,
    .dangKy > .body-form > a {
        margin-left: auto;
        margin-right: auto;
    }
}
</style>