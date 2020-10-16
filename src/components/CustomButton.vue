<template>
   <button>
      <slot/>
   </button>
</template>

<script>
export default {
name: "CustomButton"
}
</script>

<style scoped lang="scss">
   button{
      background: none;
      border: none;
      color: #FFFFFF;
      font-weight: 700;
      background: #1DA1F2;
      outline: none;
      cursor: pointer;
      font-size: 15px;
      border-radius: 99px;
      transition: 300ms;

      &:hover{
         background: rgba(#1DA1F2, .9);
      }
   }
</style>