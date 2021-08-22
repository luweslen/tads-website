<template>
  <header :class="{ isActive }">
    <div class="container" :class="{isActive}">
      <div class="content" :class="{isActive}">
        <NuxtLink to="/">
          <img src="~/assets/images/logo.svg" alt="Logo">
        </NuxtLink>

        <div
          class="toggleMenu"
          :class="{isActive}"
          @click="isActive = !isActive"
        >
          <div class="toggleMenuItem"></div>
        </div>
      </div>
      <nav class="menu" :class="{isActive}" @click="isActive = !isActive">
        <NuxtLink to="/">Início</NuxtLink>
        <NuxtLink to="/schedules">Horários</NuxtLink>
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
  height: 80px;
  width: 100%;
  background: $color-dark-gray;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    padding: 0 16px;
  }
  &.isActive {
    @media (max-width: 768px) {
      height: 100vh;
    }
  }
  .container {
    height: 100%;
    width: 100%;
    max-width: 1280px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    &.isActive {
      @media (max-width: 768px) {
        flex-direction: column;
        justify-content: start;
      }
    }

    .content {
      height: 100%;
      width: 100%;
      max-width: 960px;
      display: flex;
      align-items: center;
      justify-content: space-between;

      &.isActive {
        @media (max-width: 768px) {
          height: 80px;
        }
      }

      img {
        cursor: pointer;
      }
    }
  }
}

.menu {
  height: 100%;
  display: flex;
  align-items: center;
  gap: 16px;

  @media (max-width: 768px) {
    display: none;
  }

  &.isActive {
    @media (max-width: 768px) {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
  }

  > a {
    width: 100%;
    height: 100%;
    padding: 0.8rem;

    text-decoration: none;

    font-size: 1.5rem;
    font-weight: 900;

    color: $color-white;

    display: flex;
    align-items: center;

    @media (max-width: 768px) {
      height: auto;
    }

    &.isActive,
    &.nuxt-link-exact-active,
    &:hover {
      background: $color-green;
      color: $color-black;
    }
  }
}

.toggleMenu {
  display: none;

  position: relative;
  width: 48px;
  height: 48px;

  background: transparent;
  border: none;

  cursor: pointer;

  transition: background 0.2s;

  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &:hover {
    background: $color-black;
  }

  .toggleMenuItem {
    width: 28px;
    height: 2px;

    background: $color-green;

    transition: all 0.5s ease-in-out;

    &::before,
    &::after {
      content: "";
      position: absolute;

      width: 28px;
      height: 2px;

      background: $color-green;

      transition: all 0.5s ease-in-out;
    }
    &::before {
      transform: translateY(-8px);
    }

    &::after {
      transform: translateY(8px);
    }
  }

  &.isActive {
    .toggleMenuItem {
      transform: translateX(-50px);
      background: transparent;
      box-shadow: none;
    }
  }
  &.isActive {
    .toggleMenuItem::before {
      transform: rotate(45deg) translate(35px, -35px);
    }
  }
  &.isActive {
    .toggleMenuItem::after {
      transform: rotate(-45deg) translate(35px, 35px);
    }
  }
}

</style>
