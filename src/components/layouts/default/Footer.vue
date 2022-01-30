<template>
  <footer>
    <div class="container">
      <img src="../../../assets/images/logo.svg" alt="Tads logo">
      <div class="links">
        <NuxtLink v-for="link in links" :key="`link_${link.key}`" :to="link.to">
          <i :class='`bx ${link.icon} bx-sm`'></i>
          <span class="body-bold">{{link.value}}</span>
        </NuxtLink>
      </div>
    </div>
  </footer>
</template>

<script lang='ts'>
import { defineComponent, ref } from '@nuxtjs/composition-api'

export default defineComponent({
  setup () {
    const links = ref([
      { key: 'home', value: 'Início', icon: 'bxs-home', to: '/' },
      { key: 'schedules', value: 'Horários', icon: 'bx-time', to: '/schedules' },
    ])

    return {
      links
    }
  }
})
</script>

<style lang="scss" scoped>
footer {
  width: 100%;

  padding: 0.5rem 1rem;

  background: $color-background;

  display: flex;
  align-items: center;
  justify-content: center;

  .container {
    max-width: 1280px;

    padding: 1rem 0;

    display: flex;
    align-items: flex-start;
    justify-content: center;
    gap: 32px;

    .links{
      display: flex;
      align-items: flex-start;
      flex-direction: column;
      gap: 16px;

      border-left: 4px solid $green-7;

      padding-left: 8px;

      a {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 8px;

        text-decoration: none;

        font-size: 1.5rem;
        font-weight: 900;

        color: $green-4;

        transition: color 0.2s ease-in-out;

        &:hover {
          color: $green-6;
        }

      }
    }

  }
}

</style>
