// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Alert from '@/components/alert/main.js'

Vue.prototype.$Alert = Alert
Vue.config.productionTip = false

/* eslint-disable no-new */
let vm = new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

console.log(111, vm)
// new Vue({
//   router,
//   render: h => h(App)
// }).$mount('#app')
