<template>
  <div class="footer">
    <div class="row">
      <div class="col-md-6">
        <div class="left">
          <h5>CAPTCHANRO.COM</h5>
          <p>Cung cấp giải pháp cho vấn đề Captcha của bạn</p>
          <p>Đảm bảo uy tín chất lượng</p>
        </div>
      </div>
      <div class="col-md-6">
        <div class="right">
          <h5>VỀ CHÚNG TÔI</h5>
          <p>AI giải captcha siêu trí tuệ</p>
          <p>Giải chính xác lên đến 95%</p>
          <p>Luôn đặt quyền lợi của bạn lên hàng đầu</p>
        </div>
      </div>
    </div>
    <div class="c-line-center"></div>
    <a href="index.html"><i>Copyright @ 2024 CAPTCHA - DEV BY Mr.Huy</i></a>
  </div>
</template>
<script>
export default {

}
</script>
<style lang="css" scoped>
/*footer*/
.footer {
    margin-top: 30px;
    background-color: #101e2c;
    padding: 10px;
    padding-top: 20px;
    text-align: center;
}
.footer > .row {
    display: flex;
    border-bottom: 2px solid #f8f8ffe6;
    margin-bottom: 10px;
}
.left {
    text-align: start;
    margin-left: 30%;
}
.left > h5 {
    color: white;
    font-size: 24px;
    font-weight: 600;
    margin-bottom: 15px;
}
.left > p {
    margin-bottom: 0px;
    color: white;
}

.right {
    text-align: start;
    margin-bottom: 20px;
}
.right > h5 {
    color: white;
    font-size: 24px;
    font-weight: 600;
    margin-bottom: 15px;
}
.right > p {
    margin-bottom: 0px;
    color: white;
}
.footer > a {
    text-decoration: none !important;
    color: #f8f8ffe6;
}

.footer > a:hover > i {
    color: rgb(25, 25, 236);
}
.footer > .c-line-center {
    background-color: #c1c1c477;
    height: 0px;
    margin: 10px auto 10px auto;
    width: 100%;
}

/* Mobile Version */
/* Mobile Version */
@media (max-width: 576px) {
    .footer > .row {
        display: block;
        text-align: start;
        border-bottom: none;
    }

    .left, .right {
        text-align: start;
        margin-left: 10px;
        margin-right: auto;
    }

    .left {
        margin-bottom: 20px;
    }

    .right {
        margin-bottom: 20px;
    }
    .footer > .c-line-center {
        background-color: #c1c1c477;
        height: 0.8px;
        margin: 10px auto 10px auto;
        width: 100%;
    }
}

</style>