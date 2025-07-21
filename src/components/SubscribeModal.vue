<script setup>
const openModal = defineModel('open', { default: false })
</script>

<template>
  <div v-if="openModal" class="subscribe-success">
    <div class="modal-content">
      <div class="header">
        <span @click="openModal = false">X</span>
      </div>
      <div class="body">
        <img src="/public/img/thumb.png" alt="emoji thumb" />
        <p>Terima kasih sudah berlangganan</p>
        <span>Nantikan update terbaru dari kami</span>

        <button @click="openModal = false">Mengerti</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.subscribe-success {
  position: fixed;
  height: 100vh;
  width: 100vw;
  background-color: rgba(128, 128, 128, 0.411);
  top: 0;
  left: 0;
  z-index: 999;
  display: flex;
  align-items: center;
  justify-content: center;
}

.modal-content {
  background-color: white;
  border-radius: 8px;
  height: 300px;
  max-width: 300px;
  width: 70vw;
  padding: 16px;
}

.header {
  display: flex;
  justify-content: flex-end;
}

.body {
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: center;
}

img {
  height: 100px;
  width: 100px;
}

.body p {
  font-size: 14px;
  color: #121212;
  font-weight: 600;
  line-height: 24px;
  letter-spacing: 0.3px;
  text-align: center;
}

.body span {
  font-size: 12px;
  color: #121212;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0.3px;
  text-align: center;
}

button {
  background-color: #1976d2;
  border: none;
  padding: 8px 12px;
  border-radius: 4px;
  color: white;
}
</style>
