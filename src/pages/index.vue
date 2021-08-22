<template>
  <h3>{{message}}</h3>
</template>

<script lang='ts'>
import { defineComponent, ref, Ref } from '@nuxtjs/composition-api'

export default defineComponent({
  layout: 'default',
  setup () {
    const message: Ref = ref('Está é a página inicial')

    return {
      message
    }
  }
})
</script>


<style lang="scss" scoped>
h1 {
  color: $color-green;
}
</style>
