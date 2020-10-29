<template>
   <div class="rightBar">
      <div class="contentBox">
         <SearchBox class="search"/>
         <TrendsForYou class="trends"/>
      </div>
   </div>
</template>

<script>
import SearchBox from "@/components/SearchBox";
import TrendsForYou from "@/components/TrendsForYou";
export default {
name: "RightBar",
   components: {TrendsForYou, SearchBox}
}
</script>

<style lang="scss" scoped>
   .rightBar{
      position: absolute;
      right: 0;
      width: 350px;
      .contentBox{
         width: 358px;
         .search{
            background: #15202B !important;
            position: sticky;
            top: 0;
            z-index: 5;
            padding: 5px 0;
         }
      }
   }

   @media (max-width: 1290px) {
      .rightBar{
         position: relative;
         margin-left: 10px;
      }
   }
   @media (max-width: 1110px) {
      .rightBar{
         display: none;
      }
   }
</style>