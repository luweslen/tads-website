<template>
  <div class="schedules-page">
    <div
      v-for="(semester, semesterKey) in Semesters"
      :key="semesterKey"
      class="semester"
    >
      <header>
        <div class="title">
          <h1>
            {{semestersTranslate[semesterKey]}}
          </h1>
          <h5>Estes são os horários do 3ª semestre.</h5>
        </div>
        <img src="~/assets/images/schedule-header.svg" alt="">
      </header>
      <div
        v-for="(weekday, weekdayKey) in semester"
        :key="weekdayKey"
        class="weekday"
      >
        <h4>{{weekdayTranslate[weekdayKey]}}</h4>
        <div class="cards">
          <div
            v-if="weekday.length <= 0"
            class="empty-weekday"
          >
            <ScheduleCardEmpty
              message="Não tem aula neste dia"
            />
          </div>

          <ScheduleCard
            v-for="(schedule, index) in weekday"
            :key="schedule.name"

            :weekday-key="weekdayKey"
            :weekday="weekdayKey"
            :start-time="schedule.startTime"
            :end-time="schedule.endTime"
            :subject-name="schedule.name"
            :professor="schedule.professor"
            :link="schedule.link"
            :position="index + 1"
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
  display: flex;
  flex-direction: column;
  gap: 32px;

  // @media (max-width: 768px) {
  //   margin: 1rem;
  // }

  .semester {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 16px;

    > header {
      position: relative;

      width: 100%;

      background: $gradient-aqua-50;
      color: $color-white;

      padding: 1rem;

      display: flex;
      align-items: center;
      justify-content: space-between;

      @media (max-width: 768px) {
        height: 242px;
        align-items: center;
        justify-content: center;
      }

      img {
        @media (max-width: 768px) {
          position: absolute;
          opacity: 0.5;
        }
      }

      h1, h5 {
        @media (max-width: 768px) {
          text-align: center;
        }
      }
    }

    .weekday {
      display: flex;
      flex-direction: column;
      gap: 32px;


      @media (max-width: 768px) {
        padding: 0 2rem;
        align-items: center;
      }
      .cards {
        display: grid;
        grid-template-columns: repeat(3, 350px);

        gap: 32px;

        @media (max-width: 768px) {
          grid-template-columns: repeat(1, 320px);
          flex-direction: column;
        }

      }
    }
  }
}
</style>
