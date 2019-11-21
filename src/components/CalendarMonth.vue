<template>
  <table class="calendar-month">
    <thead>
      <CalendarWeekHeader
        v-for="(day, index) in daysInWeek"
        :key="index"
        :day="day"
      />
    </thead>
    <tbody>
      <CalendarWeek
        v-for="(week, index) in datesPerWeek"
        :key="index"
        :week="week"
        :is-today="isToday"
      />
    </tbody>
  </table>
</template>

<script>
import CalendarWeekHeader from './CalendarWeekHeader';
import CalendarWeek from './CalendarWeek';

export default {
  components: {
    CalendarWeekHeader,
    CalendarWeek
  },
  props: {
    datesPerWeek: {
      type: Array,
      default: () => []
    },
    isToday: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      daysInWeek: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
    }
  }
}
</script>

<style lang="scss" scoped>
.calendar-month {
  width: 100%;
  padding: 10px;
}
</style>