<template>
  <div class="weekdays-loader">
    <h2 />
    <div class="weekdays">
      <card-loader
        v-for="num in 10"
        :key="`card_loader_${num}`"
      />
    </div>
  </div>
</template>

<script lang='ts'>
import { defineComponent } from '@nuxtjs/composition-api';
import CardLoader from './card/loader.vue';

export default defineComponent({
  name: 'WeekdaysLoader',
  components: { CardLoader },
  props: {},
  setup () {
    return {

    }
  }
})
</script>

<style lang="scss" scoped>
.weekdays-loader {
  display: flex;
  flex-direction: column;
  gap: 32px;

  h2 {
    height: 48px;
    width: 320px;
    animation: pulse-bg-gray-ligth 3s infinite;
  }

  .weekdays {
    display: flex;
    flex-wrap: wrap;
    gap: 16px;
}
}
</style>
