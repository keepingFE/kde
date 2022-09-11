import Vue from "vue";
import "nprogress/nprogress.css";
import "normalize.css/normalize.css";
import ElementUI from "element-ui";
import "@/styles/index.scss";
import App from "./App";
import router from "./router";
Vue.use(ElementUI);
Vue.config.productionTip = false;
const vue = new Vue({
  el: "#app",
  router,
  render: (h) => h(App),
});

export default vue;
