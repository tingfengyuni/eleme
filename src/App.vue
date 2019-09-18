<template>
  <div id="app">
    <transition name="fade">
      <router-view/>
    </transition>

  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return{
      show: true
    }
  }
}
</script>

<style>
    .fade-enter-active, .fade-leave-active {
        transition: opacity  1.5s;
      }
      .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
        opacity: 0;
      }
</style>
