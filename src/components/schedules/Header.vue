<template>
  <header class="schedules-header">
    <i class='bx bx-time bx-md'></i>
    <h1>Horários</h1>
  </header>
</template>

<script lang='ts'>
import { defineComponent } from '@nuxtjs/composition-api';

export default defineComponent({
  name: 'SchedulesHeader',
  components: {},
  layout: 'default',
  props: {},
  setup () {
    return {}
  }
})
</script>

<style lang="scss" scoped>
.schedules-header {
  display: flex;
  align-items: center;
  gap: 8px;

  height: 180px;

  padding: 1rem;

  background: $gradient-aqua;

  @media (max-width: 768px) {
    justify-content: center;
    flex-direction: column;
  }

  i {
    font-size: 72px;
  }
}
</style>
