<template>
  <div class="calendar-month-header">
    <div
      class="arrow left"
      @click="toggleMonth(-1)"
    >
      <i class="material-icons">
        keyboard_arrow_left
      </i>
    </div>
    <div class="year">
      {{ fullMonth }} {{ year }}
    </div>
    <div
      class="arrow right" 
      @click="toggleMonth(1)"
    >
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
  },
  methods: {
    toggleMonth(direction) {
      this.$emit('toggleMonth', direction)
    }
  }
};
</script>

<style lang="scss" scoped>
.calendar-month-header {
  padding: 15px;
  background-image: linear-gradient(to right, #e0caca, #d4b8ca, #c7a3b5);
  display: flex;
  justify-content: space-between;
  border-radius: 10px 10px 0 0;
  align-items: center;
  color: #77505e;

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