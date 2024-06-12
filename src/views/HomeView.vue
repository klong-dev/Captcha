<script setup>
import CaptchaTheoLuot from '../components/CaptchaTheoLuot.vue'
import CaptchaTheoThang from '../components/CaptchaTheoThang.vue'
</script>
<template>
  <div class="content">
    <div class="main-content">
      <h2>CAPTCHA ĐÃ GIẢI THÁNG NÀY: <span>1.380.385</span></h2>
      <div class="c-line-center"></div>
      <CaptchaTheoThang />
      <CaptchaTheoLuot />
    </div>
    <!-- Modal -->
    <div class="modal fade" id="notifyModal" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
      aria-labelledby="notifyModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h3 class="modal-title fs-5">Thông báo</h3>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            Thông tin liên hệ: <br>
            Fanpage: <a href="https://www.facebook.com/profile.php?id=61560854253331">Captcha NRO - Giải captcha rẻ tốc
              độ cao</a>
            Facebook:
            Zalo: 0877.851.900
          </div>
          <div class=" modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Đóng</button>
            <button type="button" class="btn btn-primary" @click="buyProduct()">Mua Captcha</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { Modal } from 'bootstrap/dist/js/bootstrap.min';
export default {
  methods: {
    showNotify() {
      this.modal = new Modal(document.getElementById('notifyModal'))
      this.modal.show()
    }
  },
  mounted() {
    this.showNotify()
  },
}
</script>
<style lang="css" scoped>
.c-line-center:first-child {
  background-color: #1ca823;
  height: 3px;
  margin: 0 auto 10px auto;
  width: 80px;
}

.content {
  display: flex;
  justify-content: center;
  margin-left: 2%;
  width: 96%;
  background-color: white;
  box-shadow: 0 0 10px 5px rgba(128, 128, 128, 0.5);
}

.content > .main-content > h2:first-child {
  margin-top: 60px;
  text-align: center;
  color: red;
  margin-bottom: 0px;
  font-weight: 650;
  padding-bottom: 10px;
}

.content > .main-content > h2 > span {
  color: #ffd700;
}

.main-content > .row {
  justify-content: center;
  margin-bottom: 30px;
}

/* Điều chỉnh CSS cho phiên bản di động */
/* Các điều chỉnh cho phần content trên mobile */
@media (max-width: 576px) {
  .content {
    margin: 0;
    width: 100%;
    padding: 20px;
    /* Thêm padding cho phần content */
  }

  .first-list > ul,
  .second-list > ul {
    flex-direction: column;
    align-items: center;
    margin-bottom: 20px;
  }

  .first-list > ul > li,
  .second-list > ul > li {
    max-width: 100%;
    margin-bottom: 20px;
    width: 100%;
  }

  .first-list > ul > li > img,
  .second-list > ul > li > img {
    width: 100%;
    /* Giảm kích thước của hình ảnh */
    /* Tối đa kích thước của hình ảnh */
    margin: 0;
    /* Cải thiện khoảng cách giữa các hình ảnh */
  }

  .text-content {
    text-align: center;
    margin-top: 10px;
    /* Giảm khoảng cách trên đầu của phần nội dung */
  }

  .text-content > p {
    margin-bottom: 5px;
    /* Giảm khoảng cách giữa các đoạn văn bản */
  }

  .text-content > button {
    margin-top: 10px;
    /* Tăng khoảng cách giữa nút và phần nội dung */
  }
}
</style>
