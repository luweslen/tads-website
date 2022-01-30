import type { GetterTree, ActionTree, MutationTree } from 'vuex'
import { SchedulesByWeekday, ScheduleType } from '../@types'

export const namespace = 'schedules'

export interface ScheduleState {
  schedules: SchedulesByWeekday
  schedule: ScheduleType
}

export const state = (): ScheduleState => ({
  schedules: {},
  schedule: {
    id: '',
    weekday: '',
    startTime: '',
    endTime: '',
    type: 'ASYNCHRONOUS',
    subjectId: '',
    createdAt: new Date(),
    updatedAt: new Date()
  },
})

export const getters: GetterTree<ScheduleState, any> = {
  getSchedules: (state) => state.schedules,
  getSchedule: (state) => state.schedule
}

export const mutations: MutationTree<ScheduleState> = {
  SET_SCHEDULES: (state, schedules: SchedulesByWeekday) => { state.schedules = schedules },
  SET_SCHEDULE: (state, schedule: ScheduleType) => { state.schedule = schedule }
}


export const actions: ActionTree<ScheduleState, any> = {
  async handleGetSchedules({ commit }, payload) {
    let params = {}

    if (payload) {
      params = {
        classId: payload.classId || undefined,
        type: payload.type || undefined,
        slug: payload.slug || undefined,
      }
    }

    const { schedules } = await this.$axios.$get('/schedules', {
      params
    })

    commit('SET_SCHEDULES', schedules)
  },
  async handleGetSchedule({ commit }, id) {
    const { schedule } = await this.$axios.$get(`/schedules/${id}`)

    commit('SET_SCHEDULE', schedule)
  }
}
