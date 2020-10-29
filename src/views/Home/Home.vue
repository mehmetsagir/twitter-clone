<template>
<<<<<<< HEAD
  <div class="page">
=======
  <div>
>>>>>>> 7c1779c87b0416d2b54e87f25e341baaa1aee193
     <HomeHeader/>
     <div class="pageContainer">
        <tweetSendArea/>
        <div class="line"></div>
        <Tweet/>
     </div>
  </div>
</template>

<script>
import HomeHeader from "@/views/Home/Shared/HomeHeader";
import TweetSendArea from "@/components/tweetSendArea";
import Tweet from "@/components/Tweet";
export default {
    name: "Home",
   components: {Tweet, TweetSendArea, HomeHeader}
};
</script>

<style scoped lang="scss">
<<<<<<< HEAD
.page{
   width: 598px;
}
=======
>>>>>>> 7c1779c87b0416d2b54e87f25e341baaa1aee193
.pageContainer{
   width: 598px;
   border-right: 1px solid #38444d;
}
.line{
   margin-top: auto;
   width: 100%;
   height: 10px;
   background: rgb(37, 51, 65);
}
</style>
