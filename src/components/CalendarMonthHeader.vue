<template>
  <div class="calendar-month-header">
    {{ fullMonth }} {{ year }}
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
  padding: 15px;
  font-weight: 900;
  font-size: 20px;
  padding: 15px;
  border-radius: 10px 10px 0 0;
  text-transform: capitalize;
  background-image: linear-gradient(to right, #355C7D, #6C5B7B, #C06C84); 
}
</style>