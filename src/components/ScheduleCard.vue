<template>
  <div
    class="schedule-card"
    :class="{
      isClassToday: currentWeekday === weekdayKey
    }"
  >
    <div class="position">{{position}}</div>
    <header>
      <span class="body-bold">
        {{startTime}} - {{endTime}}
      </span>
    </header>
    <main>
      <div class="subject">
        <span class="body-bold">
          <i class="bx bx-book"></i>
          Disciplina
        </span>
        <span class="body-lead">{{subjectName}}</span>
      </div>
      <div class="professor">
        <span class="body-bold">
          <i class="bx bx-user"></i>
          Docente
        </span>
        <span class="body-lead">{{professor}}</span>
      </div>
    </main>
    <footer>
      <!-- <Button :to="link" aqua icon-start="bx bx-info-square"></Button> -->
      <Button :to="link" secondary icon-start="bx bxl-google">Acessar a aula</Button>
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
    subjectName: { type: String, required: true },
    professor: { type: String, required: true },
    link: { type: String, required: true },
    position: { type: String, required: true },
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
  min-width: 320px;
  max-width: 350px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  gap: 16px;

  background: $neutral-8;

  border-radius: 8px;

  padding-bottom: 1rem;

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

    @media (max-width: 768px) {
      width: 40px;
      height: 40px;
      top: -20px;
      right: -20px;
    }
  }

  header {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2px;

    background: $gradient-green;

    padding: 8px;
  }

  main {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    gap: 16px;

    padding: 0 1rem;

    .subject, .professor {
      display: flex;
      flex-direction: column;
      align-items: center;

      span {
        text-align: center;
        &:first-child{
          color: $green-5;
        }
      }
    }
  }


  footer {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
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
    background: $gradient-aqua;
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
