<template>
  <table class="single-date-picker__calendar-month">
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
        :is-selected="isSelected"
        @selectDate="selectDate"
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
    },
    isSelected: {
      type: Number,
      default: 0,
    }
  },
  data() {
    return {
      daysInWeek: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
    }
  },
  methods: {
    selectDate(date) {
      this.$emit('selectDate', date);
    }
  }
}
</script>

<style lang="scss" scoped>
.single-date-picker__calendar-month {
  width: 100%;
  padding: 10px;
}
</style>