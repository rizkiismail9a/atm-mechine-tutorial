<script setup>
/**
 * Pergi ke konten yang dituju
 */
const scrollToContent = (contentId) => {
  const target = document.getElementById(contentId)

  if (target) {
    target.scrollIntoView({
      inline: 'center',
      behavior: 'smooth',
      block: 'center',
    })
  }
}
</script>

<template>
  <div class="sidebar-home">
    <h3>Daftar Isi</h3>

    <ul>
      <li @click="scrollToContent('about-atm')">Apa itu mesin ATM?</li>
      <li @click="scrollToContent('usage')">Penggunaan</li>
      <li @click="scrollToContent('features')">Layanan Apa Saja yang Tersedia di ATM?</li>
    </ul>
  </div>
</template>

<style scoped>
.sidebar-home {
  position: fixed;
  right: 2%;
  top: 70px;
  width: 15vw;
  border-radius: 8px;
  padding: 16px;
  background-color: white;
  box-shadow: 1px 2px 10px rgb(216, 216, 216);

  display: flex;
  flex-direction: column;
  gap: 18px;
}

ul {
  font-size: 12px;
}

li {
  margin-left: 12px;
}

@media screen and (max-width: 1100px) {
  .sidebar-home {
    /* display: none; */
    position: unset;
    margin: auto;
    width: 70vw;
    max-width: 670px;
    margin-bottom: 20px;
  }

  li {
    font-size: 10px;
  }
}

@media screen and (max-width: 360px) {
  .sidebar-home {
    width: 90vw;
  }
}
</style>
