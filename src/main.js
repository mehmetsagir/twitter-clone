import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "@/css/main.scss";

Vue.config.productionTip = false;
Vue.component("icon", require("./components/icons").default);

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
