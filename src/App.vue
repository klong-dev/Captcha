<script setup>
import { RouterLink, RouterView } from 'vue-router'
import NavbarView from './views/partials/NavbarView.vue'
import FooterView from './views/partials/FooterView.vue'
</script>

<template>
  <NavbarView />
  <RouterView />
  <FooterView />
</template>

<style lang="scss" scoped></style>
