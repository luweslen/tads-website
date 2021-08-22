<template>
  <div class="default-layout">
    <Header />
    <main>
      <Nuxt />
    </main>
    <Footer />
  </div>
</template>

<script>
export default {}
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
  }
}
</style>
