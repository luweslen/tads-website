<template>
  <div class="default-layout">
    <default-header />
    <main>
      <Nuxt />
    </main>
    <default-footer />
  </div>
</template>

<script setup lang="ts">
import DefaultHeader from "../components/layouts/default/Header.vue"
import DefaultFooter from "../components/layouts/default/Footer.vue"
</script>

<style lang="scss" scoped>
.default-layout {
  width: 100vw;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  main {
    width: 100%;
    max-width: 1280px;
    margin-bottom: 32px;
  }
}
</style>
