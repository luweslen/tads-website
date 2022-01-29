<template>
  <div
    class="global-input-select"
    :class="classes"
  >
    <label v-if="label">{{ label }}</label>
    <select
      :disabled="disable"
      :class="classes"
      @input="updateValue"
    >
      <option
        value=""
        disabled
        :selected="!modelValue"
      >
        {{ placeholder }}
      </option>
      <option
        v-for="(option, index) in options"
        :key="`${index}`"
        :selected="modelValue === option[keyField]"
        :value="option[keyField]"
      >
        {{ option[valueField] }}
      </option>
    </select>
    <span>
      {{ error }}
    </span>
  </div>
</template>
<script lang="ts">
import { computed, defineComponent, PropType } from '@nuxtjs/composition-api';

type OptionType = {
  [key: string]: string | number;
}

export default defineComponent({
  model: {
    prop: 'modelValue',
    event: 'input',
  },
  props: {
    label: { type: String, required: false },
    placeholder: { type: String },
    error: { type: String, default: '' },
    options: { type: Array as PropType<OptionType[]>, default: () => [], required: true },
    modelValue: { type: [Number, String] },
    disable: { type: Boolean, default: false },
    block: { type: Boolean, default: false },
    keyField: {
      type: String,
      required: false,
      default: 'id',
    },
    valueField: {
      type: String,
      default: 'name',
    },
  },
  emits: ['update:modelValue'],
  setup(props, { emit }) {
    const classes = computed(() => ({
      block: props.block,
      error: props.error,
      selected: props.modelValue,
    }));

    function updateValue(event: Event) {
      const { value } = event.target as HTMLInputElement;

      emit('input', value);
    }

    return { classes, updateValue };
  },
});
</script>

<style scoped lang="scss">
.global-input-select {
  display: flex;
  flex-direction: column;
  gap: 4px;

  label {
    color: $neutral-1;
    font-size: 14px;
    font-weight: 700;
    margin-bottom: 5px;
  }

  select {
    height: 48px;

    font-size: 14px;
    color: $neutral-1;
    padding-left: 16px;
    padding-right: 16px;

    background: $green-7;

    border-radius: 4px;

    -moz-appearance: none;
    -webkit-appearance: none;
    appearance: none;

    cursor: pointer;
    background-size: 10px 10px;

    &::placeholder {
      color: $neutral-1;
    }

    &:disabled {
      cursor: not-allowed;
      color: $neutral-1;

    }
    &.error{
      border-color: #D1493E;
    }

    &:focus,
    &:focus-visible {
      outline: none !important;
      border: 2px solid $green-7;
    }
    &.selected {
      border: 2px solid $green-7;
    }
  }
  &.block {
    width: 100%;
  }
}

span {
  color: #D1493E;
  padding-left: 8px;
}
</style>
