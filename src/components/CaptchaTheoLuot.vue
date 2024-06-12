<template>
  <h2>GIẢI CAPTCHA NRO THEO LƯỢT</h2>
  <div class="c-line-center"></div>
  <div class="row">
    <div class="first-list">
      <ul class="row d-flex justify-content-center">
        <li v-for="(product, index) in products" :key="index" class="col-xl-3 col-lg-3 col-4">
          <img src="/assets/images/anh-1.png" :alt="product.name" />
          <div class="text-content">
            <h5>{{ product.name }}</h5>
            <p>{{ product.price + 'đ/Lượt' }}</p>
            <p><i class="bi bi-check-circle"></i> Tiết kiệm thời gian</p>
            <p><i class="bi bi-check-circle"></i> Giải siêu tốc &lt; 1 giây</p>
            <p><i class="bi bi-check-circle"></i> Hỗ Trợ 24/7</p>
            <button @click="buy(product)"><span>THANH TOÁN</span></button>
          </div>
        </li>
      </ul>
    </div>
  </div>
  <!-- Modal -->
  <div class="modal fade" id="buyModal" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
    aria-labelledby="buyModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h3 class="modal-title fs-5" id="buyModalLabel">Nhập số tiền muốn mua</h3>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <div class="form-group">
            <label for="buyPrice">Nhập số tiền: </label>
            <input class="form-control" id="buyPrice" type="number" v-model="buyMoney" :step="buyMoney"
              @input="handleInputChange">
          </div>
          <br>
          <div class="form-group">
            <label for="buyMoney" style="color: red">Captcha nhận được: </label>
            <input class="form-control" id="buyMoney" style="background-color: #EEEEEE; color: red" type="number"
              :value="c_product == null ? 0 : Math.floor(buyMoney / c_product.price)" readonly>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Đóng</button>
          <button type="button" class="btn btn-primary" @click="buyProduct()">Mua Captcha</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
import { useStore } from '../stores/user'
import { Modal } from 'bootstrap/dist/js/bootstrap.min';
export default {
  data() {
    return {
      products: [],
      c_product: null,
      buyMoney: 0,
      store: useStore(),
      modal: null
    }
  },
  methods: {
    buy(product) {
      this.c_product = product;
      this.buyMoney = product.price;
      this.modal = new Modal(document.getElementById('buyModal'))
      this.modal.show();
    },
    async buyProduct() {
      if (!this.store.user) {
        this.modal.hide()
        this.$router.push('/login')
      }
      if (this.c_product == null) return;
      const response = await axios.post('https://run.captchanro.com/captcha/pay', { productId: this.c_product.id, uid: this.store.user.uid })
      if (response.data.error_code === 0) {
        this.$swal('Thanh toán thành công', '', 'success')
        this.store.setUserMoney(this.store.user.money - Number(this.c_product.price.replace('.', '')))
      } else {
        this.$swal(response.data.message, '', 'error')
      }
    },
    async loadProduct() {
      try {
        const response = await axios.post('https://run.captchanro.com/product/load', { type: 0 })
        if (response.status == 200) {
          this.products = response.data
        }
      } catch (e) {
        alert(e)
      }
    },
    handleInputChange(event) {
      const inputValue = parseInt(event.target.value, 10);
      const remainder = inputValue % this.buyMoney;

      if (remainder === 0) {
        // Value is divisible by 15, no need to modify
        this.quantity = inputValue;
      } else {
        // Round down to the nearest multiple of 15
        const nearestMultiple = inputValue - remainder;
        this.quantity = nearestMultiple;
      }
    },
  },
  mounted() {
    this.loadProduct()
  }
}
</script>
<style lang="css" scoped>
.row {
  justify-content: center;
  margin-bottom: 30px;
}

h2 {
  text-align: center;
  font-weight: 700;
  padding-bottom: 10px;
  margin-bottom: 0px;
}

.first-list > ul {
  display: flex;
  justify-content: space-around;
  margin: 20px auto;
  list-style: none;
  padding-left: 0px;
}

.first-list > ul > li {
  justify-content: center;
  max-width: 100%;
  padding-left: 3px;
  padding-right: 3px;
  padding-top: 3px;
  margin: 0 10px 0 10px;
  border: 2px solid #c1c1c477;
  padding-bottom: 10px;
  transition: all 0.3s;
}

.first-list > ul > li > img {
  max-width: 100%;
}

.first-list > ul > li:hover {
  transform: scale(1.05);
}

.first-list > ul > li > .text-content {
  text-align: center;
  margin-top: 20px;
}

.first-list > ul > li > .text-content > h5 {
  color: black;
  font-weight: 700;
}

.first-list > ul > li > .text-content > p:nth-child(2) {
  color: #dc3545;
  font-weight: 700;
}

.first-list > ul > li > .text-content > p {
  color: #212529;
}

.first-list > ul > li > .text-content > button {
  background-color: #198754;
  padding: 10px 50px;
  border-radius: 4px;
  margin-bottom: 20px;
  border: 0px;
}

.first-list > ul > li > .text-content > button > span {
  color: white;
}
</style>
