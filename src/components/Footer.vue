<template>
  <footer>
    <img src="~/assets/images/logo.svg" alt="TADS">
    <div class="author-info">
      <span class="body-p">
        Feito por <b>Luciano Weslen</b>
      </span>
      <div class="buttons">
        <Button to="https://www.instagram.com/weslen.dev/" primary icon-start="bx bxl-instagram bx-sm" />
        <Button to="https://www.linkedin.com/in/lweslen/" primary icon-start="bx bxl-linkedin bx-sm" />
        <Button to="https://github.com/lweslen" primary icon-start="bx bxl-github bx-sm" />
      </div>
    </div>
    <Button to="https://github.com/lweslen/tads-landing-page" dark icon-start="bx bxl-github bx-sm">Repositório do projeto</Button>
  </footer>
</template>

<script lang='ts'>
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  layout: 'default',
  setup () {}
})
</script>

<style lang="scss" scoped>
footer {
  width: 100%;

  background: $color-header;

  margin-top: 2rem;

  padding: 0.5rem 1rem;

  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 16px;

  @media (min-width: 768px) {
    justify-content: center;
  }

  img {
    max-height: 72px;
  }

  .author-info {
    display: flex;
    align-items: center;
    gap: 8px;

    @media (max-width: 768px) {
      flex-direction: column;
    }

    .buttons {
      display: flex;
      align-items: center;
      gap: 8px;
    }
  }
}

</style>
