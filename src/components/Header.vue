<template>
  <header :class="{ isActive }">
    <div class="container" :class="{isActive}">
      <div class="content" :class="{isActive}">
        <NuxtLink to="/">
          <img src="~/assets/images/logo.svg" alt="Logo">
        </NuxtLink>

        <i
          :class="!isActive ? `bx bx-menu bx-lg` : `bx bx-x bx-lg`"
          @click="isActive = !isActive"
        ></i>
      </div>
      <nav class="menu" :class="{isActive}" @click="isActive = !isActive">
        <NuxtLink to="/">
          <i class='bx bxs-home bx-sm'></i>
          <span class="body-bold">início</span>
        </NuxtLink>
        <NuxtLink to="/schedules">
          <i class='bx bx-library bx-sm'></i>
          <span class="body-bold">Horários</span>
        </NuxtLink>
      </nav>
    </div>
  </header>
</template>

<script lang='ts'>
import { defineComponent, ref, Ref } from '@nuxtjs/composition-api'

export default defineComponent({
  layout: 'default',
  setup () {
    const isActive: Ref = ref(false);

    return {
      isActive
    }
  }
})
</script>

<style lang="scss" scoped>
header {
  position: fixed;
  top: 0;

  width: 100%;

  background: $color-header;

  padding: 0.5rem 1rem;

  z-index: 100;

  @media (min-width: 768px) {
    display: flex;
    justify-content: center;
  }
  &.isActive {
    @media (max-width: 768px) {
      height: 100vh;
    }
  }
  .container {
    width: 100%;
    max-width: 1280px;

    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 64px;

    &.isActive {
      @media (max-width: 768px) {
        flex-direction: column;
        justify-content: start;
      }
    }

    .content {
      width: 100%;
      max-width: 960px;

      display: flex;
      align-items: center;
      justify-content: space-between;

      color: $green-5;

      img {
        cursor: pointer;
        max-height: 48px;
      }

      .bx {
        transition: all 0.3s;
        @media (min-width: 768px) {
          display: none;
        }
      }
    }
  }
}

.menu {
  height: 100%;
  display: flex;
  align-items: center;
  gap: 16px;

  transition: all 0.3s ease-in-out;

  @media (max-width: 768px) {
    display: none;
  }

  &.isActive {
    @media (max-width: 768px) {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }

  > a {
    width: 100%;
    height: 100%;
    padding: 0.8rem;

    text-decoration: none;

    font-size: 1.5rem;
    font-weight: 900;

    background: $neutral-5-30;
    color: $color-white;

    display: flex;
    align-items: center;
    gap: 0.5rem;

    transition: all 0.3s;

    @media (max-width: 768px) {
      height: auto;
    }

    &.isActive,
    &.nuxt-link-exact-active,
    &:hover {
      background: $green-5-30;
      color: $green-5;
    }
  }
}

</style>
