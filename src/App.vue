<template>
  <div class="wrapper">
    <NavBar />
    <main class="container">
      <router-view/>
    </main>
    <FooterComp />
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue'


export default {
  components: {
    NavBar,
    
  }
}
</script>

<style>

</style>
