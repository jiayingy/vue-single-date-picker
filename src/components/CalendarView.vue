/* eslint-disable no-console */
<template>
  <div class="calendar-view">
    <CalendarMonthHeader
      :year="year"
      :month="month"
      @toggleMonth="toggleMonth"
    />
    <CalendarMonth 
      :dates-per-week="datesPerWeek"
      :is-today="isToday"
      :is-selected="isSelected"
      @selectDate="selectDate"
    />
  </div>
</template>

<script>
import CalendarMonthHeader from './CalendarMonthHeader';
import CalendarMonth from './CalendarMonth';

const NUM_DAYS_IN_WEEK = 7;

export default {
  components: {
    CalendarMonthHeader,
    CalendarMonth
  },
  data() {
    return {
      year: 2019,
      month: 10,
      todayDate: 1,
      todayYear: 2019,
      todayMonth: 10,
      selectedDate: null,
    }
  },
  computed: {
    numDays() {
      return new Date(this.year, this.month + 1, 0).getDate();
    },
    firstDay() {
      return new Date(this.year, this.month, 1).getDay();
    },
    lastDay() {
      return new Date(this.year, this.month + 1, 0).getDay();
    },
    numDaysInFirstWeek() {
      return NUM_DAYS_IN_WEEK - this.firstDay;
    },
    numDaysInLastWeek() {
      return this.lastDay + 1;
    },
    numWeeks() {
      const daysLeft = this.numDays - this.numDaysInFirstWeek - this.numDaysInLastWeek;
      return daysLeft / 7 + 2;
    },
    numFullWeeks() {
      return this.numWeeks - 2;
    },
    datesInFirstWeek() {
      return this.generateDatesInWeek(1, this.firstDay, this.numDaysInFirstWeek);
    },
    datesInLastWeek() {
      return this.generateDatesInWeek(this.numDays - this.numDaysInLastWeek + 1, 0, this.numDaysInLastWeek);
    },
    datesInMiddleWeeks() {
      const startDates = [];
      for (let i = 0; i < this.numFullWeeks; i += 1) {
        startDates[i] = this.datesInFirstWeek[6] + 1 + i*7;
      }
      return startDates.map(startDate => {
        return this.generateDatesInWeek(startDate, 0, 7);
      });
    },
    datesPerWeek() {
      return [
        this.datesInFirstWeek,
        ...this.datesInMiddleWeeks,
        this.datesInLastWeek
      ]
    },
    isCurrentMonth() {
      return this.todayMonth === this.month;
    },
    isCurrentYear() {
      return this.todayYear === this.year;
    },
    isToday() {
      return (this.isCurrentMonth && this.isCurrentYear) ? this.todayDate : 0;
    },
    isSelected() {
      if (this.selectedDate) {
        return (this.selectedDate.year === this.year) && (this.selectedDate.month === this.month) ? this.selectedDate.date : 0;
      }
      return 0;
    }
  },
  created() {
    const date = new Date();
    this.year = date.getFullYear();
    this.month = date.getMonth();

    this.todayDate = date.getDate();
    this.todayYear = this.year;
    this.todayMonth = this.month;

  },
  methods: {
    generateDatesInWeek(startDate, startDay, numDays) {
      const datesInWeek = new Array(7).fill(0);
      for (let i = 0; i < numDays; i+=1) {
        datesInWeek[startDay + i] = startDate + i;
      }
      return datesInWeek;
    },
    toggleMonth(direction) {
      let newMonth = this.month + Number(direction);
      let newYear = this.year;
      if (newMonth < 0) {
        newMonth = 11;
        newYear -= 1; 
      }
      if (newMonth > 11) {
        newMonth = 0;
        newYear += 1;
      }
      if (newYear >= 1970) {
        this.month = newMonth;
        this.year = newYear;
      }
    },
    selectDate(date) {
      if (date) {
        this.selectedDate = {
          year: this.year,
          month: this.month,
          date
        }
        this.$emit('selectDate', this.selectedDate);
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.calendar-view {
  max-width: 300px;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 0 10px 3px rgba(0, 0, 0, 0.1);
  color: #0d1e44;
}
</style>