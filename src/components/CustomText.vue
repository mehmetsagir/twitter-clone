<template>
  <components :is="tag" :class="font">
    <slot />
  </components>
</template>

<script>
export default {
  name: "CustomText",
  props: {
    tag: {
      type: String,
      default: "span"
    },
    font: {
      type: String,
      default: "normal fw-normal"
    }
  }
};
</script>

<style scoped>
.small {
  font-size: 13px;
}
.normal {
  font-size: 14px;
}
.large {
  font-size: 15px;
}
.xlarge {
  font-size: 19px;
}
.fw-normal {
  font-weight: 400;
}
.fw-bold {
  font-weight: 700;
}
.fw-heavy {
  font-weight: 800;
}
</style>
