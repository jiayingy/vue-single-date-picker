<template>
  <div class="calendar-month-header">
    <div class="arrow left">
      <i class="material-icons">
        keyboard_arrow_left
      </i>
    </div>
    <div class="year">
      {{ fullMonth }} {{ year }}
    </div>
    <div class="arrow right">
      <i class="material-icons">
        keyboard_arrow_right
      </i>
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
  padding: 15px;
  background-image: linear-gradient(to right, #355C7D, #6C5B7B, #C06C84); 
  display: flex;
  justify-content: space-between;
  border-radius: 10px 10px 0 0;
  align-items: center;

  .year {
    font-weight: 900;
    font-size: 20px;
    text-transform: capitalize;
  }
  .arrow {
    cursor: pointer;
  }
}
</style>