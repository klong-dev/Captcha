<template>
  <h2>GIẢI CAPTCHA NRO THEO THÁNG</h2>
  <div class="c-line-center"></div>
  <div class="row">
    <div class="first-list">
      <ul>
        <li v-for="(product, index) in products" :key="index">
          <img :src="product.image" :alt="product.name" />
          <div class="text-content">
            <h5>{{ product.name }}</h5>
            <p>{{ product.price }}</p>
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
export default {
  data() {
    return {
      products: [
        {
          id: 1,
          name: 'GÓI CAPTCHA 1 MÁY',
          image: '/assets/images/tim-hieu-ve-ai-trong-python.jpg',
          price: '150.000đ/Tháng'
        },
        {
          id: 2,
          name: 'GÓI CAPTCHA 2 MÁY',
          image: '/assets/images/tim-hieu-ve-ai-trong-python.jpg',
          price: '250.000đ/Tháng'
        },
        {
          id: 3,
          name: 'GÓI CAPTCHA 3 MÁY',
          image: '/assets/images/tim-hieu-ve-ai-trong-python.jpg',
          price: '350.000đ/Tháng'
        }
      ]
    }
  }
}
</script>
<style lang="scss"></style>
