<template>
  <div id="app">
    <router-link to="/">home</router-link>
    <router-link to="/parallax">parallax</router-link>
    <router-link to="/fabric">fabric</router-link>
    <router-link to="/paper">paper</router-link>
    <router-link to="/bindX">BindX</router-link>
    <router-link to="/echarts">Echarts</router-link>
    <router-link to="/video">Video</router-link>
    <keep-alive><router-view/></keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
body {
  margin: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 20px;
  height: calc(100vh - 39px);
}
</style>
