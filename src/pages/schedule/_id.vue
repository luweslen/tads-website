<template>
  <div class="schedule-page">
    <schedule-header />
    <div class="class-details">
      <span>
        <i class="bx bx-time"/>
        <strong>Horário: </strong>
        {{schedule.startTime}} - {{schedule.endTime}}
      </span>
      <span>
        <i class="bx bx-library"/>
        <strong>Disciplina: </strong>
        {{schedule.subject.data.name}}
      </span>
      <span>
        <i class="bx bxs-ghost"/>
        <strong>Turma: </strong>
        {{schedule.subject.class.name}}
      </span>
      <span>
        <i class="bx bx-user"/>
        <strong>Professor: </strong>
        {{`${schedule.subject.professor.user.firstName} ${schedule.subject.professor.user.lastName}`}}
      </span>
      <span v-if="schedule.subject.classroomCode">
        <i class="bx bx-code "/>
        <a :href="`https://classroom.google.com/c/NDYzNjk5NTg1OTk0?cjc=${schedule.subject.classroomCode}`" target="_blank">
          <strong>{{schedule.subject.classroomCode}}</strong>
        </a>
      </span>
      <span v-if="schedule.subject.meetingLink">
        <i class="bx bx-link"/>
        <a :href="schedule.subject.meetingLink" target="_blank">
          <strong>Link da aula</strong>
        </a>
      </span>
    </div>
  </div>
</template>

<script lang='ts'>
import { computed, defineComponent, useContext } from '@nuxtjs/composition-api';
import ScheduleHeader from '../../components/schedule/Header.vue';
import { ScheduleType } from '../../@types';

export default defineComponent({
  name: 'SchedulesPage',
  components: {
    ScheduleHeader
  },
  layout: 'default',
  setup () {
    const { store, route} = useContext();

    const { id } = route.value.params

    const schedule = computed<ScheduleType>(() => store.getters['schedules/getSchedule'])

    store.dispatch('schedules/handleGetSchedule', id)

    return {
      schedule
    }
  }
})
</script>

<style lang="scss" scoped>
.schedule-page {
  display: flex;
  flex-direction: column;
  gap: 16px;

  .class-details {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;

    background: $background-transparent;
    backdrop-filter: blur(40px);

    border: 2px solid $green-7;

    border-radius: 8px;

    padding: 1rem;

    @media (max-width: 768px) {
      grid-template-columns: 1fr;
      margin: 16px;
    }

    span {
      font-size: 24px;
    }

    a {
      text-decoration: none;

      color: $neutral-1;

      transition: color 0.2s ease-in-out;

      &:hover {
        color: $neutral-3;
      }
    }
  }
}
</style>
