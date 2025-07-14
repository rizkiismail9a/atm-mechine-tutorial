<script setup>
import { RouterView } from 'vue-router'
import NavBar from './components/NavBar.vue'
import MainLayout from './layouts/MainLayout.vue'
</script>

<template>
  <NavBar />

  <MainLayout>
    <RouterView keep-alive />
  </MainLayout>
</template>

<style scoped></style>
