import Vue from 'vue'
import App from './App.vue'
import './assets/styles/common.scss';

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#single-date-picker')
