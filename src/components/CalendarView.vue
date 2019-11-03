<template>
  <table>
    <thead>
      <CalendarHeader
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
      />
    </tbody>
  </table>
</template>

<script>
import CalendarHeader from './CalendarHeader';
import CalendarWeek from './CalendarWeek';

const NUM_DAYS_IN_WEEK = 7;

export default {
  components: {
    CalendarHeader,
    CalendarWeek,
  },
  data() {
    return {
      daysInWeek: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
      year: 2019,
      month: 9
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
    }
  },
  methods: {
    generateDatesInWeek(startDate, startDay, numDays) {
      const datesInWeek = new Array(7).fill(0);
      for (let i = 0; i < numDays; i+=1) {
        datesInWeek[startDay + i] = startDate + i;
      }
      return datesInWeek;
    }
  }
}
</script>

<style>

</style>