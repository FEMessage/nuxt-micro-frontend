<template>
  <div class="about">
    <h1>This is an about page</h1>
    <el-button @click="go2Home">go2Home</el-button>
  </div>
</template>

<script>

export default {
  methods: {
    go2Home() {
      this.$router.push({
        name: 'Home'
      })
    }
  }  
}
</script>
