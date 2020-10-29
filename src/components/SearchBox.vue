<template>
   <div class="searchBox">
      <form>
         <input type="text" :placeholder="placeholder">
         <icon name="search"/>
      </form>
   </div>
</template>

<script>
export default {
name: "SearchBox",
   props :{
      placeholder: {
         type: String,
         default: 'Search Twitter'
      }
   }
}
</script>

<style lang="scss" scoped>
   .searchBox{
      margin-top: 5px;
      position: relative;
      form{
         svg{
            width: 17px;
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            left: 15px;
            fill: #8899a6;
         }
         input:focus + svg{
            fill: #1da1f2 !important;
         }
         input{
            border-radius: 50px;
            outline: none;
            border: 1px solid transparent;
            width: 100%;
            height: 42px;
            padding-left: 50px;
            font-size: 16px;
            background: #253341;
            color: #8899a6 !important;
            line-height: 40px;
            &::placeholder{
               color: #8899a6 !important;
            }

            &:focus{
               border-color: #1da1f2;
               background: none;
            }
         }
      }
   }
</style>