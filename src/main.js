import Vue from 'vue'
import App from './App.vue'
import '../css/bootstrap.min.css'
import '../../../node_modules/@fortawesome/fontawesome-free/css/all.css'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
