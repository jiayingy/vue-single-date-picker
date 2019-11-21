<template>
  <tr>
    <CalendarDate
      v-for="(date, index) in week"
      :key="index"
      :date="date"
      :is-today="isToday === date"
    />
  </tr>
</template>

<script>
import CalendarDate from './CalendarDate';
export default {
  components: {
    CalendarDate
  },
  props: {
    week: {
      type: Array,
      default: () => []
    },
    isToday: {
      type: Number,
      default: 0
    }
  }
}
</script>

<style scoped>
tr {
  color: #614a52;
}
</style>