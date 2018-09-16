import Vue from 'vue'
import './registerServiceWorker'
import App from './App.vue'
import VueMatomo from 'vue-matomo'

Vue.use(VueMatomo, {
  host: 'https://matomo.overeem.io',
  siteId: 1
})

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
