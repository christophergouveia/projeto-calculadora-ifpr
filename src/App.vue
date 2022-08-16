<template>
  <navbarComponent/>
  <router-view/>
</template>

<script>
  import navbarComponent from '@/components/navbarComponent.vue';
  export default {
    components: {
      navbarComponent
    }
  }
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
