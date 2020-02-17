import Vue from 'vue'
import CalendarView from './CalendarView.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(CalendarView),
}).$mount('#single-date-picker')
