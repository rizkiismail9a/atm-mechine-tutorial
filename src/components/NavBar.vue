<script setup></script>

<template>
  <nav class="navbar">
    <RouterLink to="/">ATM Mini Course</RouterLink>
  </nav>
</template>

<style scoped>
a {
  text-decoration: none;
  color: black;
  font-size: 16px;
  font-weight: 600;
}

.navbar {
  display: flex;
  position: fixed;
  z-index: 100;
  top: 0;
  background-color: white;
  justify-content: center;
  align-items: center;
  padding: 20px;
  height: 50px;
  width: 100%;
  box-shadow: 0 2px 10px rgb(212, 212, 212);
}

div {
  max-width: 70%;
}
</style>
