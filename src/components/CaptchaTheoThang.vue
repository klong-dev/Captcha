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
import axios from 'axios'
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
        this.products = response.data
        //format all element price of products from 150000 to 150.000
        this.products.forEach((product) => {
          product.price = product.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')
        })
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
.second-list > ul {
  display: flex;
  justify-content: space-around;
  margin: 20px auto;
  list-style: none;
}

.second-list > ul > li {
  justify-content: center;
  max-width: 100%;
  padding-left: 3px;
  padding-right: 3px;
  padding-top: 3px;
  margin-right: 40px;
  border: 2px solid #c1c1c477;
  padding-bottom: 10px;
  transition: all 0.3s;
}

.second-list > ul > li > img {
  width: 100%;
}

.second-list > ul > li:hover {
  transform: scale(1.05);
}

.second-list > ul > li > .text-content {
  text-align: center;
  margin-top: 20px;
}

.second-list > ul > li > .text-content > h5 {
  color: black;
  font-weight: 700;
  font-size: 20px;
}

.second-list > ul > li > .text-content > p:nth-child(2) {
  color: #dc3545;
  font-weight: 700;
}

.second-list > ul > li > .text-content > p {
  color: #212529;
}

.second-list > ul > li > .text-content > button {
  background-color: #198754;
  padding: 10px 50px;
  border-radius: 4px;
  margin-bottom: 20px;
  border: 0px;
}

.second-list > ul > li > .text-content > button > span {
  color: white;
}
</style>
