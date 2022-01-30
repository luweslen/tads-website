<template>
  <div class="schedule-card">
    <header>
      {{startTime}} - {{endTime}}
    </header>
    <main>
      <div class="subject">
        <span class="body-bold">
          <i class="bx bx-book"></i>
          Disciplina
        </span>
        <span class="body-lead">{{`${subject.data.name} (${subject.data.initials})`}}</span>
      </div>
      <div class="professor">
        <span class="body-bold">
          <i class="bx bx-user"></i>
          Docente
        </span>
        <span class="body-lead">{{`${professor.user.firstName} ${professor.user.lastName}`}}</span>
      </div>
    </main>
    <footer>
      <global-button
        dark
        icon-start="bx bx-info-square"
        :block="type === 'ASYNCHRONOUS'"
      >
        {{type === 'ASYNCHRONOUS' ? 'Saber mais' : ''}}
      </global-button>
      <global-button
        v-if="type === 'SYNCHRONOUS'"
        :to="subject.meetingLink"
        secondary
        icon-start="bx bxl-google"
        block
      >
        Acessar a aula
      </global-button>
    </footer>
  </div>
</template>

<script lang='ts'>
import { defineComponent, PropType } from '@nuxtjs/composition-api';
import GlobalButton from '../../../../global/GlobalModal.vue';
import { ClassRawType, ProfessorType, SubjectType } from '../../../../../@types';

export default defineComponent({
  name: 'ScheduleCard',
  components: { GlobalButton },
  props: {
    professor: {
      type: Object as PropType<ProfessorType>,
      require: true
    },
    classData: {
      type: Object as PropType<ClassRawType>,
      require: true
    },
    subject: {
      type: Object as PropType<SubjectType>,
      require: true
    },
    startTime: {
      type: String,
      require: true
    },
    endTime: {
      type: String,
      require: true
    },
    type: {
      type: String,
      require: true
    },
  },
  setup () {
    return {

    }
  }
})
</script>

<style lang="scss" scoped>
.schedule-card {
  width: 100%;
  min-width: 320px;
  max-width: 380px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  gap: 16px;

  background: $background-transparent;
  backdrop-filter: blur(40px);

  border: 2px solid $green-7;

  border-radius: 8px;

  padding: 0.5rem;

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
}
</style>
