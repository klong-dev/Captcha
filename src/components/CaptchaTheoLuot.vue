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
import axios from 'axios'
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
        this.products = response.data
      }
    }
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
