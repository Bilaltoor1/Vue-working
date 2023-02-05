<template>
  <main class="layout">
    <the-header></the-header>
    <main class="main-layout">
      <router-view/>
    </main>
    <the-footer></the-footer>
  </main>
</template>

<script setup>
import TheHeader from './components/TheHeader';
import TheFooter from './components/TheFooter';

</script>
<style lang="stylus">
* {
  color #67beca
  padding 0
  margin 0
  box-sizing border-box
  list-style none
  text-decoration none
}

.layout {
  background-color #67beca
  width 100vw
  height 100vh
  display flex
  flex-direction column
}

.main-layout {
  background-color white
  min-width 80%
  min-height 80%
  display flex
  align-items center
  justify-content center
  margin 1rem auto
}
</style>