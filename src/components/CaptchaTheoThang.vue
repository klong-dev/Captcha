<template>
  <h2>GIẢI CAPTCHA NRO THEO THÁNG</h2>
  <div class="c-line-center"></div>
  <div class="row">
    <div class="second-list">
      <ul class="row">
        <li v-for="(product, index) in products" :key="index" class="col-xl-3 col-lg-4 col-5">
          <img src="/assets/images/anh-2.jpg" :alt="product.name" />
          <div class="text-content">
            <h5>{{ product.name }}</h5>
            <p>{{ product.price }} / {{ product.time }} ngày</p>
            <p><i class="bi bi-check-circle"></i> Tiết kiệm thời gian</p>
            <p><i class="bi bi-check-circle"></i> Giải siêu tốc &lt; 1 giây</p>
            <p><i class="bi bi-check-circle"></i> Hỗ Trợ 24/7</p>
            <button><span>THANH TOÁN</span></button>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import axios from 'axios';
export default {
  data() {
    return {
      products: []
    }
  },
  methods: {
    async loadProduct() {
      const response = await axios.post('http://localhost:3000/product/load', { type: 1 })
      if (response.status == 200) {
        this.products = response.data;
        //format all element price of products from 150000 to 150.000
        this.products.forEach(product => {
          product.price = product.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
        });
      }
    }
  },
  mounted() {
    this.loadProduct();
  }
}
</script>
<style lang="">

</style>