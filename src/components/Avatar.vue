<template>
         <img class="profileImage" :class="size" :src="image" alt="avatar">
</template>

<script>
export default {
   name: "Avatar",
   props : {
      image: {
         type: String,
      },
      size: {
         type: String,
         default: 'normal'
      }
   }
}
</script>

<style lang="scss" scoped>
   .profileImage{
      display: inline-block;
      position: relative;
      border-radius: 50%;
   }
   .normal{
      width: 40px;
      height: 40px;
   }
   .large{
      width: 50px;
      height: 50px;
   }
   .xlarge{
      width: 60px;
      height: 60px;
   }
</style>