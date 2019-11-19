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
  font-size: 10px;
  font-size: 14px;
  height: 30px;
  width: 30px;
  display: table-cell;
  vertical-align: middle;
  box-sizing: border-box;
  cursor: default;

  &:hover {
    border-radius: 50%;
    border: 2px solid pink;
  }
}
</style>