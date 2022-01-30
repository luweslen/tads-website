<template>
  <div class="section-selects">
    <global-input-select
      v-model="params.slug"
      label="turma"
      placeholder="Selecione uma turma"
      :options="classes"
      key-field="slug"
    />
    <global-input-select
      v-model="params.type"
      label="tipo"
      placeholder="Selecione um tipo"
      :options="typeOptions"
      key-field="key"
      value-field="value"
    />
  </div>
</template>

<script lang='ts'>
import { defineComponent, PropType, reactive, watch } from '@nuxtjs/composition-api';
import { ClassRawType } from '../../../../@types';

type ParamsType = {
  slug: String
  type: String
}

export default defineComponent({
  name: 'SectionSelects',
  components: {},
  props: {
    classes: { type: Array as PropType<ClassRawType[]> },
    startParams: { type: Object as PropType<ParamsType>, require: true },
  },
  setup (props, { emit }) {
    const params = reactive<ParamsType>({
      slug: '',
      type: ''
    })

    const typeOptions = reactive([
      { key: 'ASYNCHRONOUS', value: 'ASSÍNCRONO' },
      { key: 'SYNCHRONOUS', value: 'SÍNCRONO' }
    ])

    watch(params, () => {
      emit('select-params', params)
    })

    watch(() => props.startParams, () => {
      if(props.startParams){
        params.slug = props.startParams.slug
        params.type = props.startParams.type
      }
    })

    return {
      params,
      typeOptions
    }
  }
})
</script>

<style lang="scss" scoped>
.section-selects {
  display: flex;
  gap: 8px;
}
</style>
