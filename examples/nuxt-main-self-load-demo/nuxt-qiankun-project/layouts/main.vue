<template>
  <div>
    <button @click="back">back to the index page</button>
    <nuxt />
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState(['apps'])
  },
  methods: {
    back() {
      this.$router.push(this.apps[0].activeRule)
    }
  }
}
</script>

<style>

</style>
