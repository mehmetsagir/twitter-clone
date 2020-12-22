<template>
  <div class="container">
    <CustomText font="xlarge fw-heavy">Home</CustomText>
    <icon class="stars hover" name="stars" />
  </div>
</template>

<script>
import CustomText from "@/components/CustomText";
export default {
  name: "HomeHeader",
  components: { CustomText }
};
</script>

<style scoped lang="scss">
.container {
  background: #15202b;
  width: 100%;
  height: 53px;
  border-bottom: 1px solid #38444d;
  border-right: 1px solid #38444d;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: sticky;
  top: 0;
  padding: 0 5px 0 15px;
  z-index: 99;
  span {
    cursor: pointer;
  }

  .stars {
    width: 40px;
    fill: #1da1f2;
    border-radius: 50%;
    padding: 8px;
  }
}
</style>
