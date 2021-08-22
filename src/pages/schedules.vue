<template>
  <div  class="schedules-page">
    <div
      v-for="(semester, semesterKey) in Semesters"
      :key="semesterKey"
      class="semester"
    >
      <header>
        <fa-icon
          icon="calendar-alt"
          size="2x"
        />
        <h2>
          {{semestersTranslate[semesterKey]}}
        </h2>
      </header>
      <div
        v-for="(weekday, weekdayKey) in semester"
        :key="weekdayKey"
        class="weekday"
      >
        <h3>{{weekdayTranslate[weekdayKey]}}</h3>
        <div class="cards">
          <div
            v-if="weekday.length <= 0"
            class="empty-weekday"
          >
            <span>Não tem aulas nesse dia 😀</span>
          </div>

          <ScheduleCard
            v-for="schedule in weekday"
            :key="schedule.name"

            :weekday-key="weekdayKey"
            :weekday="weekdayKey"
            :start-time="schedule.startTime"
            :end-time="schedule.endTime"
            :name="schedule.name"
            :professor="schedule.professor"
            :link="schedule.link"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang='ts'>
import { defineComponent } from '@nuxtjs/composition-api';
import Semesters from '../db/schedules';
import { semestersTranslate, weekdayTranslate } from '../utils/Translate';

export default defineComponent({
  layout: 'default',
  setup () {

    return {
      Semesters,
      semestersTranslate,
      weekdayTranslate
    }
  }
})
</script>

<style lang="scss" scoped>
.schedules-page {
  margin: 1.5rem;

  display: flex;
  flex-direction: column;
  gap: 32px;

  .semester {
    display: flex;
    flex-direction: column;
    gap: 16px;

    > header {
      background: linear-gradient(90deg, $color-dark-green, $color-green);
      color: $color-white;

      padding: 1rem;

      display: flex;
      align-items: center;
      gap: 8px;

      h2 {
        font-size: 2rem;
      }
    }

    .weekday {
      display: flex;
      flex-direction: column;
      gap: 16px;

      h3 {
        font-size: 1.5rem;
      }

      .cards {
        display: flex;
        flex-wrap: wrap;
        gap: 16px;

      }
    }
  }
}
</style>
