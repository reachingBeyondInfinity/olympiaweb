import Vue from 'vue'
import App from './App.vue'

import BootstrapVue from "bootstrap-vue"
import VueScrollTo from 'vue-scrollto';


Vue.config.productionTip = false
Vue.use(BootstrapVue)
Vue.use(VueScrollTo)

new Vue({
  render: h => h(App),
}).$mount('#app')


