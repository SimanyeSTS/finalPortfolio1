<template>
  <div class="wrapper">
    <NavBar />
      <router-view />
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
  background-color: #36454F;
  width: 100%;
  height: 100%;
}

.container{
  width: 100%;
  height: 100%;
}
</style>

<style src="@/assets/css/style.css">
</style>
