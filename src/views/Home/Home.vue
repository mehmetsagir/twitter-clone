<template>
  <div class="page">
    <HomeHeader />
    <div class="pageContainer">
      <tweetSendArea />
      <div class="line"></div>
      <Tweet />
    </div>
  </div>
</template>

<script>
import HomeHeader from "@/views/Home/Shared/HomeHeader";
import TweetSendArea from "@/components/tweetSendArea";
import Tweet from "@/components/Tweet";
export default {
  name: "Home",
  components: { Tweet, TweetSendArea, HomeHeader }
};
</script>

<style scoped lang="scss">
.page {
  width: 598px;
}
.pageContainer {
  width: 598px;
  border-right: 1px solid #38444d;
}
.line {
  margin-top: auto;
  width: 100%;
  height: 10px;
  background: rgb(37, 51, 65);
}
</style>
