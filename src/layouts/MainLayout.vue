<script setup></script>

<template>
  <main class="layout">
    <div class="content">
      <slot></slot>
    </div>
  </main>
</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Noto Sans', sans-serif;
  font-optical-sizing: auto;
  font-style: normal;
}

.layout {
  width: 100%;
  min-height: 100vh;
}

.content {
  padding-top: 70px;
  margin: auto;
  max-width: 95vw;
  /* background-color: antiquewhite; */
}

@media (min-width: 768px) {
  .content {
    max-width: 700px;
  }
}
</style>
