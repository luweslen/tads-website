<template>
  <div></div>
</template>

<script lang='ts'>
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  name: 'GlobalModal',
  props: {
  },
  setup () {
    return {
    }
  }
})
</script>

<style lang="scss" scoped>
a, button {
  width: fit-content;
  height: fit-content;
  border: 0;
  padding: 0.5rem 1rem;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  cursor: pointer;

  transition: all 0.3s;

  text-decoration: none;

  &.primary {
    background: $color-primary;
    color: $color-white;

    &:hover:not(:disabled):not(.loading), &:disabled {
      background: $green-7;
    }
  }
  &.secondary {
    background: $color-secondary;
    color: $color-white;

    &:hover:not(:disabled):not(.loading), &:disabled {
      background: $blue-7;
    }
  }
  &.dark {
    background: $neutral-5;
    color: $color-white;

    &:hover:not(:disabled):not(.loading), &:disabled {
      background: $neutral-6;
    }
  }
  &.light {
    background: $neutral-1;
    color: $neutral-8;

    &:hover:not(:disabled):not(.loading), &:disabled {
      background: $neutral-4;
    }
  }
  &.aqua {
    background: $gradient-aqua;
    color: $neutral-1;

    &:hover:not(:disabled):not(.loading), &:disabled {
      opacity: 0.8;
    }
  }

  &.block {
    width: 100%;
  }

  &:disabled, &.loading {
    filter: brightness(0.8);
    cursor: not-allowed;
  }
}
</style>
