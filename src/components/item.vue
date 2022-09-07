<template>
<!-- 容器组件 -->
  <div class="item">
    <slot></slot>
  </div>
</template>

<script>
export default {}
</script>

<style lang="less" scoped>
.item {
  height: 6rem;
  border: 1px solid blue;
  margin: 0.25rem;
  background-color: rgba(12, 130, 255, 0.85);
}
</style>
