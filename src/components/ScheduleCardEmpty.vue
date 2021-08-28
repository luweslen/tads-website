<template>
  <div
    class="schedule-card"
  >
    <div class="position">
      <i class="bx bx-smile"></i>
    </div>
    <header>
      <span class="body-bold">
        {{message}}
      </span>
    </header>
  </div>
</template>

<script lang='ts'>
import { defineComponent } from '@nuxtjs/composition-api'
import { weekdays } from '../utils/Weekdays';

export default defineComponent({
  layout: 'default',
  props: {
    message: { type: String, required: true },
  },
  setup () {
    const currentWeekdayNumber = new Date().getDay();
    const currentWeekday = weekdays[currentWeekdayNumber];

    return {
      currentWeekday
    }
  }
})
</script>

<style lang="scss" scoped>
.schedule-card {
  position: relative;
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  gap: 16px;

  background: $neutral-8;

  border-radius: 8px;

  @media (max-width: 768px) {
    max-width: 100%;
  }

  .position{
    width: 48px;
    height: 48px;
    position: absolute;
    top: -24px;
    right: -24px;

    background: $blue-5;
    border-radius: 50%;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  header {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    background: $gradient-green;

    padding: 1rem;
  }

}
</style>
