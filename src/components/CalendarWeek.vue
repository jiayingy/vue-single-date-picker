<template>
  <tr>
    <CalendarDate
      v-for="(date, index) in week"
      :key="index"
      :date="date"
      :selected="selectedDate === date"
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
    selectedDate: {
      type: Number,
      default: 0
    }
  }
}
</script>

<style>

</style>