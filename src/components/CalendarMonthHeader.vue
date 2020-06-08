<template>
  <div class="single-date-picker__calendar-month-header">
    <div
      class="single-date-picker__arrow left"
      @click="toggleMonth(-1)"
    >
      <i class="material-icons">
        keyboard_arrow_left
      </i>
    </div>
    <div class="single-date-picker__year">
      {{ fullMonth }} {{ year }}
    </div>
    <div
      class="single-date-picker__arrow right" 
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
.single-date-picker__calendar-month-header {
  padding: 15px;
  background-image: linear-gradient(to right, #e0caca, #d4b8ca, #c7a3b5);
  display: flex;
  justify-content: space-between;
  border-radius: 10px 10px 0 0;
  align-items: center;
  color: #77505e;

  .single-date-picker__year {
    font-weight: 900;
    font-size: 20px;
    text-transform: capitalize;
  }
  .single-date-picker__arrow {
    cursor: pointer;
  }
}

@font-face {
  font-family: 'Material Icons';
  font-style: normal;
  font-weight: 400;
  src: url(../assets/iconfont/MaterialIcons-Regular.eot); /* For IE6-8 */
  src: local('Material Icons'),
    local('MaterialIcons-Regular'),
    url(../assets/iconfont/MaterialIcons-Regular.woff2) format('woff2'),
    url(../assets/iconfont/MaterialIcons-Regular.woff) format('woff'),
    url(../assets/iconfont/MaterialIcons-Regular.ttf) format('truetype');
}

.material-icons {
  font-family: 'Material Icons';
  font-weight: normal;
  font-style: normal;
  font-size: 24px;  /* Preferred icon size */
  display: inline-block;
  line-height: 1;
  text-transform: none;
  letter-spacing: normal;
  word-wrap: normal;
  white-space: nowrap;
  direction: ltr;

  /* Support for all WebKit browsers. */
  -webkit-font-smoothing: antialiased;
  /* Support for Safari and Chrome. */
  text-rendering: optimizeLegibility;

  /* Support for Firefox. */
  -moz-osx-font-smoothing: grayscale;

  /* Support for IE. */
  font-feature-settings: 'liga';
}
</style>