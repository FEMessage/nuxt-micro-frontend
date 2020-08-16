
<template>
  <div class="page-404">
    page 404
    <button @click="$router.replace('/')">返回首页</button>
  </div>
</template>

<script>
export default {
  layout: 'empty'
}
</script>

<style>
.page-404 {
  text-align: center;
}
</style>
