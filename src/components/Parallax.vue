<template>
  <div id="scene">
    <div data-depth="0.2">My first Layer!</div>
    <div data-depth="0.6">My second Layer!</div>
  </div>
</template>

<script>
import Parallax from 'parallax-js'

export default {
  name: 'Parallax',
  mounted () {
    // eslint-disable-next-line
    const parallaxInstance = new Parallax(document.getElementById('scene'))
  }
}
</script>

<style scoped>

</style>
