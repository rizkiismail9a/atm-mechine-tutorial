<script setup>
import { RouterLink } from 'vue-router'

defineProps({
  link: String,
  label: String,
})
</script>

<template>
  <RouterLink :to="link">
    {{ label }}
  </RouterLink>
</template>

<style scoped>
a {
  text-decoration: none;
  background-color: #1976d2;
  padding: 8px 12px;
  color: white;
  border-radius: 100px;
  min-width: 150px;
  width: fit-content;
  font-size: 12px;
}

a:active {
  background-color: #10589f;
}
</style>
