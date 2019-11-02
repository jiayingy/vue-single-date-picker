<template>
  <tr>
    <CalendarDate
      v-for="date in dates"
      :key="date"
      :date="date"
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
    dates: {
      type: Number,
      default: () => 30
    },
  }
}
</script>

<style>

</style>