import type { GetterTree, ActionTree, MutationTree } from 'vuex'
import { ClassRawType } from '../@types'

export const namespace = 'classes'

export interface ScheduleState {
  classes: ClassRawType[]
}

export const state = (): ScheduleState => ({
  classes: []
})

export const getters: GetterTree<ScheduleState, any> = {
  getClasses: (state) => state.classes
}

export const mutations: MutationTree<ScheduleState> = {
  SET_CLASSES: (state, schedules: any[]) => { state.classes = schedules }
}


export const actions: ActionTree<ScheduleState, any> = {
  async handleGetClasses({ commit }) {
    const { classes } = await this.$axios.$get('/classes')

    commit('SET_CLASSES', classes)
  }
}
