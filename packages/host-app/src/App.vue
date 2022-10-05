<template>
  <h1>Host App</h1>
  <RemoteApp />
</template>

<script>
import RemoteApp from 'remote_app1/RemoteApp.vue'

export default {
  name: 'App',
  components: {
    RemoteApp,
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
