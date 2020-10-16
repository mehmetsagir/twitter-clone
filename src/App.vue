<template>
   <div id="app">
      <Sidebar/>
      <router-view class="box"/>
   </div>
</template>

<script>
import Sidebar from "@/components/Sidebar";
export default {
   name: "App.vue",
   components : {
      Sidebar,
   }
}
</script>

<style lang="scss">
   #app{
      display: flex;
   }
   .box{
      height: 200vh;
   }
</style>