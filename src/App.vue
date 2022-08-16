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