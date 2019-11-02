<template>
  <div class="date">
    {{ date }}
  </div>
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
}
</style>