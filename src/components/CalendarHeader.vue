<template>
  <th>
    <p>{{ day }}</p>
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

<style>

</style>