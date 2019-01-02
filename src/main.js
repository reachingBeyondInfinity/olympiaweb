import Vue from 'vue'
import BootstrapVue from "bootstrap-vue"
import App from './App.vue'
import vueSmoothScroll from 'vue-smooth-scroll'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

import "bootstrap-vue/dist/bootstrap-vue.css"

Vue.config.productionTip = false
Vue.use(BootstrapVue)
Vue.use(vueSmoothScroll)

new Vue({
  render: h => h(App),
}).$mount('#app')


