<template>
  <div primary class="home-page">
  </div>
</template>

<script lang='ts'>
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  layout: 'default',
  setup () {
    return {}
  }
})
</script>


<style lang="scss" scoped>
.home-page {
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;

  gap: 32px;
}
</style>
