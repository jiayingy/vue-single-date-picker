<template>
  <div>
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
  "january",
  "february",
  "march",
  "april",
  "may",
  "june",
  "july",
  "august",
  "september",
  "october",
  "november",
  "december"
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

<style>
</style>