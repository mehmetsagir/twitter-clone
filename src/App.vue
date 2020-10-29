<template>
    <div id="app">
        <Sidebar/>
        <div class="container">
            <router-view />
        </div>
       <RightBar class="rightbar"/>
       <MessageBox/>
    </div>
</template>

<script>
import Sidebar from "@/components/Sidebar";
import MessageBox from "@/components/MessageBox";
import RightBar from "@/components/RightBar";
export default {
    name: "App.vue",
    components: {
       RightBar,
       MessageBox,
        Sidebar
    }
};
</script>

<style lang="scss" scoped>
#app {
    position: relative;
    max-width: 1250px;
    max-height: 100vh;
    display: flex;
    margin: 0 auto;
    .container {
        width: 100%;
    }
}
@media (max-width: 1290px) {
    #app {
        max-width: 1000px !important;
       margin: 0 auto !important;
    }
}
</style>