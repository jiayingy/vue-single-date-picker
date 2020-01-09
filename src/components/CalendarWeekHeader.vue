<template>
  <th>
    <div class="single-date-picker__calendar-week-header">
      {{ day }}
    </div>
  </th>
</template>

<script>
export default {
  props: {
    day: {
      type: String,
      default: () => ''
    }
  }
}
</script>

<style scoped>
.single-date-picker__calendar-week-header {
  margin-top: 15px;
  color: #77505e;
}
</style>