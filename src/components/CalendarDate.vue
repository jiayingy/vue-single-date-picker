<template>
  <td>
    <div
      v-show="date"
      class="date"
    >
      {{ date }}
    </div>
  </td>
</template>

<script>
export default {
  props: {
    date: {
      type: Number,
      default: () => 1
    }
  }
}
</script>

<style lang="scss" scoped>
.date {
  height: 10px;
  width: 10px;
  font-size: 10px;
  padding: 15px;
  font-size: 14px;
}
</style>