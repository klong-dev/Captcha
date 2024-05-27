<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <div class="header">
    <div class="row d-flex justify-content-between">
      <div class="col-5 d-none d-sm-block">
        <div class="nav-left">
          <img src="@/assets/images/logo2.png" alt="logo" />
          <RouterLink to="/">Trang chủ</RouterLink>
          <a href="#">Hỗ trợ</a>
          <RouterLink to="/pay">Nạp tiền</RouterLink>
        </div>
      </div>
      <div class="col-7 d-none d-sm-block">
        <div v-if="$cookies.get('user') == null" class="nav-right">
          <RouterLink to="/login"><i class="bi bi-box-arrow-in-right"></i> Đăng Nhập</RouterLink>
          <RouterLink to="/signup"><i class="bi bi-person-check"></i> Đăng Ký</RouterLink>
        </div>
        <div v-if="$cookies.get('user') != null" class="nav-right">
          <h3>Xin chào {{ $cookies.get('user').username }}</h3>
        </div>
      </div>
    </div>
  </div>

  <nav class="navbar navbar-expand-sm bg-light navbar-light d-sm-none fixed-top">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">
        <img src="@/assets/images/logo2.png" alt="logo" style="height: 40px"
      /></a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#collapsibleNavbar"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="collapsibleNavbar">
        <ul class="navbar-nav me-auto">
          <li class="nav-item">
            <a class="nav-link" href="index.html">Trang chủ</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Hỗ trợ</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="napTien.html">Nạp tiền</a>
          </li>
        </ul>
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link" href="dangNhap.html"
              ><i class="bi bi-box-arrow-in-right"></i> Đăng Nhập</a
            >
          </li>
          <li class="nav-item">
            <a class="nav-link" href="dangKy.html"><i class="bi bi-person-check"></i> Đăng Ký</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <!--Kết thúc header-->
</template>
<script>
export default {}
</script>
<style lang="scss" scoped>
.header {
  background-color: #ffffffe6;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-bottom: 30px;
  & > .row {
    padding-bottom: 20px;
  }
}
.nav-left {
  display: flex;
  justify-content: start;
  margin-top: 10px;
  margin-left: 10px;
  & > a {
    margin-top: 20px;
    text-decoration: none !important;
    color: black;
    font-weight: 700;
  }
  * {
    margin-right: 20px;
    text-align: center;
  }
}
.nav-right {
  display: flex;
  justify-content: end;
  margin-right: 30px;
  margin-top: 28px;
  * {
    margin-left: 20px;
    text-align: center;
    border: 2px solid;
    padding: 5px 0px;
    font-weight: 700;
    text-decoration: none !important;
  }
  & > a {
    color: white;
    border: 2px solid #198754;
    background: #198756;
    border-radius: 5px;
    &:first-child {
      color: white;
      border: 2px solid #dc3545;
      background: #dc3545;
      border-radius: 5px;
      &:hover {
        color: black;
        border: 2px solid #dc3545;
        background: #dc3545;
        border-radius: 5px;
      }
    }
    & > .bi-box-arrow-in-right {
      margin-left: 0px;
      border: 0px;
      padding-left: 0px;
      padding-right: 0px;
    }
    &:hover {
      color: black;
      border: 2px solid #198754;
      background: #198756;
      border-radius: 5px;
    }
  }
}
.bi-person-check {
  margin-left: 0px;
  border: 0px;
  padding-left: 0px;
  padding-right: 0px;
}
</style>
