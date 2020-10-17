<template>
    <div id="app">
        <Sidebar />
        <div class="container">
            <router-view />
        </div>
    </div>
</template>

<script>
import Sidebar from "@/components/Sidebar";
export default {
    name: "App.vue",
    components: {
        Sidebar
    }
};
</script>

<style lang="scss" scoped>
#app {
    margin: 0 auto;
    max-width: 1250px;
    display: flex;
    height: 300vh;
    justify-content: center;
    .container {
        flex: 2;
        width: 100%;
        height: 100vh;
    }
}
@media (max-width: 1290px) {
    #app {
        max-width: 1000px !important;
    }
}
</style>