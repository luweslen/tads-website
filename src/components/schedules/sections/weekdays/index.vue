<template>
  <div v-if="!isEmpty && !loading" class="section-weekdays">
    <div v-for="(schedules, weekday) in weekdays" :key="weekday" class="weekday">
      <h2>{{weekdayTranslate[weekday.toLowerCase()]}}</h2>
      <div class="cards">
        <card
          v-for="schedule in schedules"
          :id="schedule.id"
          :key="`schedule_${schedule.id}`"
          :professor="schedule.subject.professor"
          :class-data="schedule.subject.class"
          :subject="schedule.subject"
          :start-time="schedule.startTime"
          :end-time="schedule.endTime"
          :type="schedule.type"
          @know-more="(id) => $emit('know-more', id)"
        />
      </div>
    </div>
  </div>
  <weekdays-loader v-else />
</template>

<script lang='ts'>
import { defineComponent, PropType } from '@nuxtjs/composition-api';
import { weekdayTranslate } from '../../../../utils/Translate';
import { SchedulesByWeekday } from '../../../../@types';
import WeekdaysLoader from './loader.vue'
import Card from './card/index.vue';

export default defineComponent({
  name: 'SectionWeekdays',
  components: { WeekdaysLoader, Card },
  props: {
    weekdays: {
      type: Object as PropType<SchedulesByWeekday>,
      require: true
    },
    loading: {
      type: Boolean,
      default: false
    },
    isEmpty: {
      type: Boolean,
      default: false
    }
  },
  setup () {
    return {
      weekdayTranslate
    }
  }
})
</script>

<style lang="scss" scoped>
.section-weekdays {
  display: flex;
  flex-direction: column;
  gap: 32px;

  @media (max-width: 768px) {
    margin: 16px;
  }

  .weekday {
    display: flex;
    flex-direction: column;
    gap: 16px;

    .cards{
      display: flex;
      flex-wrap: wrap;
      gap: 16px;
    }
  }
}
</style>
