<template>
  <div>
    <h2>Home page</h2>
    <button @click="go2about">go2about</button>
    <button @click="toast">Toast</button>
  </div>
</template>

<script>
export default {
  methods: {
    go2about() {
      this.$router.push({ name: 'About'})
    },
    toast() {
      this.$sdk && this.$sdk.toast({
        message: '来自 nuxt 触发的 toast',
        type: 'success'
      })
    }
  }
}
</script>

<style>

</style>
