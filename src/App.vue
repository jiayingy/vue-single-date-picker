<template>
  <div id="app">
    <h1>single date picker</h1>
    <calendar-view />
  </div>
</template>

<script>
import CalendarView from './CalendarView.vue'

export default {
  name: 'App',
  components: {
    CalendarView
  }
}
</script>

<style lang="scss">
#app {
  color: #0d1e44;
  margin: auto;
  padding: 30px;
  text-align: center;
}

#single-date-picker {
  margin: auto;
}

h1 {
  color: #c7a3b5;
  background: linear-gradient(to right, #e0caca, #d4b8ca, #c7a3b5);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 60px;
  font-weight: 300;
  font-family: 'Lato', Arial, Helvetica, sans-serif;
  text-transform: uppercase;
  letter-spacing: 1px;
}
</style>
