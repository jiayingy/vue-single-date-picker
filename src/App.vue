<template>
  <div id="app">
    <calendar-view />
  </div>
</template>

<script>
import CalendarView from './components/CalendarView.vue'

export default {
  name: 'App',
  components: {
    CalendarView
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
