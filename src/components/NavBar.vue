<script setup></script>

<template>
  <nav class="navbar">
    <div>ATM Mini Course</div>
  </nav>
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
