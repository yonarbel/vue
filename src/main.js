import '@babel/polyfill'
import Vue from "vue";
import './plugins/vuetify'
import App from "./App.vue";
import router from "./router";
import store from "@/store/store.js";
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCopyright } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
Vue.config.productionTip = false;

library.add(faCopyright)

Vue.component('font-awesome-icon', FontAwesomeIcon)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
