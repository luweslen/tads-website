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
      @know-more="handleToSchedulePage"
    />
  </div>
</template>

<script lang='ts'>
import { defineComponent, useContext, computed, ref, watch, onMounted, useRouter } from '@nuxtjs/composition-api';

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
    const { store, route  } = useContext();
    const router = useRouter();

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

    function handleToSchedulePage(id: String){
      router.push(`/schedule/${id}`)
    }

    return {
      startParams,
      classes,
      schedules,
      loading,
      isEmpty,
      handleSelectParams,
      handleToSchedulePage
    }
  }
})
</script>

<style lang="scss" scoped>
.schedules-page {
  display: flex;
  flex-direction: column;
  gap: 16px;
}
</style>
