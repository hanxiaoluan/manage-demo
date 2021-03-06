import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import ElementUI from "element-ui";
Vue.use(ElementUI);
import 'element-ui/lib/theme-chalk/index.css'
import '@/styles/index.scss';
/* import mockdata from '../mock/test'; */

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");