import Vue from 'vue'
import App from './App.vue'

import BootstrapVue from "bootstrap-vue"
import VueScrollTo from 'vue-scrollto';
import Transitions from 'vue2-transitions'
import VueObserveVisibility from 'vue-observe-visibility'

import AOS from 'aos'
import 'aos/dist/aos.css'
import KsVueScrollmagic from 'ks-vue-scrollmagic'

import VueProgressiveImage from 'vue-progressive-image'

require('vue2-animate/dist/vue2-animate.min.css')

Vue.config.productionTip = false

Vue.use(BootstrapVue)
Vue.use(VueScrollTo)
Vue.use(Transitions)
Vue.use(VueObserveVisibility)
Vue.use(KsVueScrollmagic)
Vue.use(VueProgressiveImage)

new Vue({
  
  created () {
    AOS.init()
  },

  render: h => h(App),
}).$mount('#app')


