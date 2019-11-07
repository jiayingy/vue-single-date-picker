<template>
  <div class="calendar-month-header">
    <div class="year">
      {{ year }}
    </div>
    <div class="month">
      {{ fullMonth }}
    </div>
  </div>
</template>

<script>
const MONTHS = [
  'january',
  'february',
  'march',
  'april',
  'may',
  'june',
  'july',
  'august',
  'september',
  'october',
  'november',
  'december'
];
export default {
  props: {
    year: {
      type: Number,
      default: () => 1970
    },
    month: {
      type: Number,
      default: () => 0
    }
  },
  computed: {
    fullMonth() {
      return MONTHS[this.month];
    }
  }
};
</script>

<style lang="scss" scoped>
.calendar-month-header {
  padding: $calendar-padding;
  font-weight: 900;
  font-size: 20px;
  padding: 15px;
  text-transform: uppercase;
  background-image: linear-gradient(to right, #FFAFBD, #ffc3a0); 
}
</style>