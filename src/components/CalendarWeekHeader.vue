<template>
  <th>
    <div class="calendar-week-header">
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
.calendar-week-header {
  margin-top: 15px;
}
</style>