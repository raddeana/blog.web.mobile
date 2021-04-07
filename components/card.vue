<template functional>
<div class="card">
  <h4>{{ card.title }}</h4>
  <img :src="card.pic" />
</div>
</template>
<style lang="less" scoped>
.card {
  line-height: 20px;
}
</style>
<script lang="ts">
export default {
  props: {
    card: {
      type: String,
      default: {}
    }
  }
}
</script>
