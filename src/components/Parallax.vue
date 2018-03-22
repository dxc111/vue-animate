<template>
  <div id="scene">
    <div data-depth="0.2">My first Layer!</div>
    <div data-depth="0.6">My second Layer!</div>
    <canvas id="canvas" width="300" height="300" data-depth="0.3"></canvas>
  </div>
</template>

<script>
import Parallax from 'parallax-js'
import {fabric} from 'fabric'

export default {
  name: 'Parallax',
  mounted () {
    // eslint-disable-next-line
    const parallaxInstance = new Parallax(document.getElementById('scene'))
    const canvas = new fabric.Canvas('canvas')

    const rect = new fabric.Rect({
      top: 100,
      left: 100,
      width: 60,
      height: 70,
      fill: 'red'
    })
    canvas.add(rect)
    console.info(canvas)
  }
}
</script>

<style scoped>
#scene {
  overflow: hidden;
}
</style>
