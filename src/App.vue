<script setup>
import { RouterLink, RouterView } from 'vue-router'
import MainLayout from './layouts/MainLayout.vue'
</script>

<template>
  <header class="navbar">
    <span> Ini Navbar </span>
    <!-- Bisa jadiin sidebar juga -->

    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/about">About</RouterLink>
    </nav>
  </header>

  <MainLayout>
    <RouterView />
  </MainLayout>
</template>

<style scoped>
a {
  text-decoration: none;
  color: black;
}

.navbar {
  display: flex;
  position: fixed;
  z-index: 100;
  background-color: white;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  height: 50px;
  width: 100%;
  box-shadow: 0 2px 10px rgb(212, 212, 212);
}

nav a.router-link-exact-active {
  color: green;
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
}
</style>
