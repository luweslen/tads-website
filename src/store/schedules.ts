import type { GetterTree, ActionTree, MutationTree } from 'vuex'

export const namespace = 'schedules'

export interface ScheduleState {
  schedules: any[]
}

export const state = (): ScheduleState => ({
  schedules: []
})

export const getters: GetterTree<ScheduleState, any> = {
  getSchedules: (state) => state.schedules
}

export const mutations: MutationTree<ScheduleState> = {
  SET_SCHEDULES: (state, schedules: any[]) => { state.schedules = schedules }
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
  }
}
