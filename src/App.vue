<template>
  <div class="wrapper">
    <NavBar />
    <main class="container">
      <router-view />
    </main>
    <FooterComp />
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue'
import FooterComp from '@/components/FooterComp.vue';


export default {
  components: {
    NavBar,
    FooterComp,
    
  }
}
</script>

<style scoped>
.wrapper{
  background-color: #2e2e2e;
}
</style>
