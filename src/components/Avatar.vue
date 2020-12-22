<template>
  <img class="profileImage" :class="size" :src="image" alt="avatar" />
</template>

<script>
export default {
  name: "Avatar",
  props: {
    image: {
      type: String,
      default:
        "https://www.shareicon.net/data/128x128/2016/05/24/770117_people_512x512.png"
    },
    size: {
      type: String,
      default: "normal"
    }
  }
};
</script>

<style lang="scss" scoped>
.profileImage {
  display: inline-block;
  position: relative;
  border-radius: 50%;
}
.normal {
  width: 40px;
  height: 40px;
}
.large {
  width: 50px;
  height: 50px;
}
.xlarge {
  width: 60px;
  height: 60px;
}
</style>
