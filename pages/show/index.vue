<template>
  <div class="container">
    <NuxtLink class="btn" to="/show/layout">layout</NuxtLink>
    <div class="line hover-slide-10"></div>
    
  </div>
</template>

<script>
export default {
  name: 'ShowIndex',
  layout: 'test'
}
</script>

<style lang="scss" scoped>
  .container {
    padding-top: 20px;
  }
  .line {
    display: block;
    width: 200px;
    height: 20px;
    background: lightslategray;
    &:hover {
      background: #ff1a1a;
    }
  }
  .hover-slide-10 {
    transition: 0.3s ease all;
    transform: translate3d(0, 0, 0);
    &:hover {
      transform: translate3d(10px, 0, 0);
    }
  }
</style>