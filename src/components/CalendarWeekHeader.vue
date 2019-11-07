<template>
  <th>
    <div class="week-header">
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
.week-header {
  margin-top: 15px;
}
</style>