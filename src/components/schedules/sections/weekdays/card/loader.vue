<template>
  <div class="card-loader">
    <header />
    <main>
      <div class="subject">
        <span class="body-bold" />
        <span class="body-lead" />
      </div>
      <div class="professor">
        <span class="body-bold" />
        <span class="body-lead" />
      </div>
    </main>
    <footer>
      <div class="button" />
    </footer>
  </div>
</template>

<script lang='ts'>
import { defineComponent } from '@nuxtjs/composition-api';

export default defineComponent({
  name: 'CardLoader',
  components: {},
  props: {},
  setup () {
    return {

    }
  }
})
</script>

<style lang="scss" scoped>
.card-loader {
  width: 100%;
  min-width: 320px;
  max-width: 380px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  gap: 16px;

  background: $background-transparent;
  backdrop-filter: blur(40px);

  border: 2px solid $green-7;

  border-radius: 8px;

  padding: 0.5rem;

  @media (max-width: 768px) {
    max-width: 100%;
  }

  .position{
    width: 48px;
    height: 48px;
    position: absolute;
    top: -24px;
    right: -24px;

    background: $blue-5;
    border-radius: 50%;

    display: flex;
    align-items: center;
    justify-content: center;

    @media (max-width: 768px) {
      width: 40px;
      height: 40px;
      top: -20px;
      right: -20px;
    }
  }

  header {
    height: 40px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2px;

    animation: pulse-bg-green  3s infinite;
  }

  main {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    gap: 16px;

    padding: 0 1rem;

    .subject, .professor {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 4px;

      span {
        width: 100%;
        text-align: center;

        &:first-child{
          height: 16px;
          width: 120px;
          animation: pulse-bg-green  3s infinite;
        }

        &:nth-child(2){
          height: 24px;
          width: 100%;
          animation: pulse-bg-gray  3s infinite;
        }
      }
    }
  }


  footer {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;

    .button {
      height: 48px;
      width: 100%;
      animation: pulse-bg-blue  3s infinite;
    }
  }
}

</style>
