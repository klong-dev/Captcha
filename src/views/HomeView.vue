<script setup>
import CaptchaTheoLuot from '../components/CaptchaTheoLuot.vue';
import CaptchaTheoThang from '../components/CaptchaTheoThang.vue';
</script>
<template>
  <div class="content">
      <div class="main-content">
        <h2>CAPTCHA ĐÃ GIẢI THÁNG NÀY: <span>1.380.385</span></h2>
        <div class="c-line-center"></div>
        <CaptchaTheoThang />
        <CaptchaTheoLuot />
      </div>
    </div>
</template>
<script>
export default {
}
</script>
<style lang="css">
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
.content > .main-content > h2 {
    text-align: center;
    font-weight: 700;
    padding-bottom: 10px;
    margin-bottom: 0px;
}
.content > .main-content > h2 > span {
    color: #ffd700;
}
.main-content > .row {
    justify-content: center;
    margin-bottom: 30px;
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
    width: 300px;
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
.first-list > ul > li > .text-content > p{
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
    max-width: 100%;
    width: 400px;
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
.second-list > ul > li > .text-content > p{
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
/* Điều chỉnh CSS cho phiên bản di động */
/* Các điều chỉnh cho phần content trên mobile */
@media (max-width: 576px) {
    .content {
        margin: 0;
        width: 100%;
        padding: 20px; /* Thêm padding cho phần content */
    }

    .first-list > ul, .second-list > ul {
        flex-direction: column;
        align-items: center;
        margin-bottom: 20px;
    }

    .first-list > ul > li, .second-list > ul > li {
        max-width: 100%;
        margin-bottom: 20px;
        width: 300px;
    }

    .first-list > ul > li > img, .second-list > ul > li > img {
        width: 100%; /* Giảm kích thước của hình ảnh */
        max-width: 300px; /* Tối đa kích thước của hình ảnh */
        margin: 0; /* Cải thiện khoảng cách giữa các hình ảnh */
    }

    .text-content {
        text-align: center;
        margin-top: 10px; /* Giảm khoảng cách trên đầu của phần nội dung */
    }

    .text-content > p {
        margin-bottom: 5px; /* Giảm khoảng cách giữa các đoạn văn bản */
    }

    .text-content > button {
        margin-top: 10px; /* Tăng khoảng cách giữa nút và phần nội dung */
    }
}
</style>