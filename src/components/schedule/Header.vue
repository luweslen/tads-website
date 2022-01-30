<template>
  <header class="schedule-header">
    <i class='bx bxs-label bx-md'></i>
    <h1>Detalhes do horário</h1>
  </header>
</template>

<script lang='ts'>
import { defineComponent } from '@nuxtjs/composition-api';

export default defineComponent({
  name: 'ScheduleHeader',
  components: {},
  layout: 'default',
  props: {},
  setup () {
    return {

    }
  }
})
</script>

<style lang="scss" scoped>
.schedule-header {
  display: flex;
  align-items: center;
  gap: 8px;

  min-height: 180px;

  padding: 1rem;

  background: $gradient-aqua;

  @media (max-width: 768px) {
    justify-content: center;
    flex-direction: column;
    text-align: center;
  }

  i {
    font-size: 72px;
  }
}
</style>
