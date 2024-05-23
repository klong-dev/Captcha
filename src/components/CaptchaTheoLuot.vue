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
      const response = await axios.post('http://localhost:3000/product/load', { type: 0 })
      if (response.status == 200) {
        this.products = response.data;
      }
    }
  },
  mounted() {
    this.loadProduct();
  }
}
</script>
<style lang="scss"></style>
