<template>
  <h2>GIẢI CAPTCHA NRO THEO THÁNG</h2>
  <div class="c-line-center"></div>
  <div class="row">
    <div class="second-list">
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
          name: 'COMBO 1 - MUA DƯỚI 100.000Đ',
          image: '/assets/images/anh-1.png',
          price: '15đ/Lượt',
        },
        {
          id: 2,
          name: 'COMBO 2 - MUA TRÊN 100.000Đ',
          image: '/assets/images/anh-1.png',
          price: '10đ/Lượt',
        },
        {
          id: 3,
          name: 'COMBO 3 - MUA 300.000Đ TRỞ LÊN',
          image: '/assets/images/anh-1.png',
          price: '5đ/Lượt',
        },
      ]
    }
  },
}
</script>
<style lang="">

</style>