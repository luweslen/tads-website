<template>
  <div class="schedules-page">
    <schedules-header />
    <section-selects
      :classes="classes"
      :start-params="startParams"
      @select-params="handleSelectParams"
    />
    <section-weekdays
      :weekdays="schedules"
      :is-empty="isEmpty()"
      :loading="loading"
    />
  </div>
</template>

<script lang='ts'>
import { defineComponent, useContext, computed, ref, watch, onMounted } from '@nuxtjs/composition-api';

import { ClassRawType, SchedulesByWeekday } from '../@types';
import SectionWeekdays from '../components/schedules/sections/weekdays/index.vue';
import SectionSelects from '../components/schedules/sections/selects/index.vue';
import SchedulesHeader from '../components/schedules/Header.vue';

type ParamsType = {
  classId?: String
}

export default defineComponent({
  name: 'SchedulesPage',
  components: {
    SectionWeekdays,
    SectionSelects,
    SchedulesHeader
  },
  layout: 'default',
  setup () {
    const { store, route } = useContext();

    const schedules = computed<SchedulesByWeekday>(() => store.getters['schedules/getSchedules'])
    const classes = computed<ClassRawType[]>(() => store.getters['classes/getClasses'])
    const loading = ref(true)
    const startParams = ref({})

    store.dispatch('classes/handleGetClasses')

    onMounted(() => {
      const queryParams = route.value.query

      startParams.value = {
        type: queryParams.type || undefined,
        slug: queryParams.slug || undefined,
      }
    })

    watch(schedules, () => {
      if(!isEmpty()) {
        loading.value = false
      }
    })

    function handleSelectParams(params: ParamsType){
      store.dispatch('schedules/handleGetSchedules', params)
    }

    function isEmpty(){
      let state = false

      if(!schedules){
        state = true
      } else {
        Object.keys(schedules).forEach((item) => {
          if(schedules[item].length <= 0) state = true
        })
      }

      return state
    }

    return {
      startParams,
      classes,
      schedules,
      loading,
      isEmpty,
      handleSelectParams
    }
  }
})
</script>

<style lang="scss" scoped>
.schedules-page {
  display: flex;
  flex-direction: column;
  gap: 16px;

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
