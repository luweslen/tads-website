<template>
  <div class="home-page">
    <section class="info">
      <div class="content">
        <h1>
          <span>&lt;</span>TADS 2020<span>&#47;&gt;</span>
        </h1>
        <span class="subtitle">
          Tecnologia em Analise e Desenvolvimento de Sistemas
        </span>
        <p class="description">
          Website para auxiliar a organização da turma 2020 do curso de Tecnologia em Analise e Desenvolvimento de Sistemas do Instituto Federal do Paraná - Campus Londrina.
        </p>
        <NuxtLink to="/schedules">
          Horários das aulas
          <font-awesome-icon icon="chevron-down" />
        </NuxtLink>
      </div>
      <img src="../assets/images/programming.svg" alt="Programming Image">
    </section>
  </div>
</template>

<script lang='ts'>
import { defineComponent, ref, Ref } from '@nuxtjs/composition-api'

export default defineComponent({
  layout: 'default',
  setup () {
    const message: Ref = ref('Está é a página inicial')

    return {
      message
    }
  }
})
</script>


<style lang="scss" scoped>
.home-page {
  width: 100%;

  display: flex;
  flex-direction: column;

  gap: 32px;

  .info {
    width: 100%;
    height: 90vh;

    display: flex;
    justify-content: space-around;
    align-items: center;

    gap: 2rem;

    padding: 4rem;

    .content {
      max-width: 480px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: 1.5rem;

      > h1 {
        font-size: 3rem;
        font-weight: 900;

        span {
          color: $color-green;
        }
      }
      > span {
        font-size: 2rem;
        font-weight: 900;
        color: $color-green;

        border-bottom: 2px solid $color-gray;

        padding-bottom: 8px;
      }
      p {
        font-size: 1rem;
      }
      > a {
        width: 100%;
        text-decoration: none;

        background: $color-green;
        color: $color-black;

        border: 0;

        font-weight: 900;
        font-size: 1rem;

        padding: 0.6rem;

        text-align: center;

        @media (max-width: 768px) {
          height: auto;
        }

        &:hover {
          filter: brightness(0.9);
        }
      }
    }
    img {
      width: 480px;

      @media (max-width: 768px) {
        display: none;
      }
    }
  }
}
</style>
