<template>
  <div
    class="schedule-card"
    :class="{
      isClassToday: currentWeekday === weekdayKey
    }"
  >
    <header>
      <span>
        {{startTime}} até {{endTime}}
      </span>
    </header>
    <main>
      <span>
        <strong>Displina:</strong> {{name}}
      </span>
      <span>
        <strong>Docente:</strong> {{professor}}
      </span>
    </main>
    <footer>
      <a :href="link" target="_blank">Acessar aula</a>
    </footer>
  </div>
</template>

<script lang='ts'>
import { defineComponent } from '@nuxtjs/composition-api'
import { weekdays } from '../utils/Weekdays';

export default defineComponent({
  layout: 'default',
  props: {
    weekdayKey: { type: String, required: true },
    weekday: { type: String, required: true },
    startTime: { type: String, required: true },
    endTime: { type: String, required: true },
    name: { type: String, required: true },
    professor: { type: String, required: true },
    link: { type: String, required: true },
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
  width: 100%;
  max-width: 550px;

  display: flex;
  flex-direction: column;
  gap: 16px;

  background: $color-dark-gray;

  padding: 16px;

  border-radius: 8px;

  @media (max-width: 768px) {
    max-width: 100%;
  }

  & > header {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2px;

    border-bottom: 2px solid $color-green;

    padding: 8px;
  }

  & > header h2 {
    width: 100%;
    font-size: 1.4rem;
    text-align: center;
  }

  & > header span {
    font-size: 1.2rem;
  }

  & > main {
    width: 100%;
    display: flex;
    flex-direction: column;

    gap: 4px;
  }

  & > main span {
    font-size: 1.2rem;
  }

  & > footer {
    display: flex;
  }

  & > footer a {
    width: 100%;
    text-decoration: none;

    background: $color-green;
    color: $color-black;

    font-weight: 900;
    font-size: 0.8rem;

    padding: 0.6rem;

    text-align: center;

    border-radius: 8px;
  }

  & > footer a:hover {
    filter: brightness(0.9);
  }

  &.isClassToday {
    position: relative;
    border: 2px;
  }

  &.isClassToday::after {
    position: absolute;
    content: "";
    top: calc(-1 * 2px);
    left: calc(-1 * 2px);
    z-index: -1;
    width: calc(100% + 2px * 2);
    height: calc(100% + 2px * 2);
    background: linear-gradient(
      60deg,
      $color-green,
      $color-dark-gray,
      $color-green
    );
    background-size: 300% 300%;
    background-position: 0 50%;
    border-radius: calc(2 * 2px);
    animation: moveGradient 4s alternate infinite;
  }

  @keyframes moveGradient {
    50% {
      background-position: 100% 50%;
    }
  }

}
</style>
