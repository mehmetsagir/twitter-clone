<template>
    <div id="app">
        <Sidebar/>
        <div class="container">
            <router-view />
        </div>
       <MessageBox/>
    </div>
</template>

<script>
import Sidebar from "@/components/Sidebar";
import MessageBox from "@/components/MessageBox";
export default {
    name: "App.vue",
    components: {
       MessageBox,
        Sidebar
    }
};
</script>

<style lang="scss" scoped>
#app {
    max-width: 1250px;
    max-height: 100vh;
    display: flex;
    justify-content: center;
    margin: 0 auto;
    .container {
        width: 100%;
    }
}
@media (max-width: 1290px) {
    #app {
        max-width: 1000px !important;
    }
}
</style>