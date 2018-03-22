<template>
  <div id="scene">
    <div data-depth="0.2">My first Layer!</div>
    <div data-depth="0.6">My second Layer!</div>
    <canvas id="canvas" width="700" height="400" data-depth="0.3"></canvas>
  </div>
</template>

<script>
import Parallax from 'parallax-js'
import {fabric} from 'fabric'

export default {
  name: 'Parallax',
  data () {
    return {
      parallaxInstance: undefined,
      canvas: undefined
    }
  },
  mounted () {
    // eslint-disable-next-line
    this.parallaxInstance = new Parallax(document.getElementById('scene'))
    this.canvas = new fabric.Canvas('canvas', {
      selectionColor: 'blue',
      selectionLineWidth: 2
    })

    const rect = new fabric.Rect({
      left: 100,
      top: 100,
      fill: 'red',
      width: 20,
      height: 20
    })
    const circle = new fabric.Circle({
      radius: 20,
      fill: 'green',
      left: 100,
      top: 100
    })
    const triangle = new fabric.Triangle({
      width: 20,
      height: 30,
      fill: 'blue',
      left: 50,
      top: 50,
      angle: 45
    })
    const path = new fabric.Path(`M121.32,0L44.58,0C36.67,0,29.5,3.22,24.31,8.41
c-5.19,5.19-8.41,12.37-8.41,20.28c0,15.82,12.87,28.69,28.69,28.69c0,0,4.4,
0,7.48,0C36.66,72.78,8.4,101.04,8.4,101.04C2.98,106.45,0,113.66,0,121.32
c0,7.66,2.98,14.87,8.4,20.29l0,0c5.42,5.42,12.62,8.4,20.28,8.4c7.66,0,14.87
-2.98,20.29-8.4c0,0,28.26-28.25,43.66-43.66c0,3.08,0,7.48,0,7.48c0,15.82,
12.87,28.69,28.69,28.69c7.66,0,14.87-2.99,20.29-8.4c5.42-5.42,8.4-12.62,8.4
-20.28l0-76.74c0-7.66-2.98-14.87-8.4-20.29C136.19,2.98,128.98,0,121.32,0z`)
    path.set({ left: 120, top: 120, fill: 'yellow' })

    this.canvas.add(rect, circle, triangle, path)
    setTimeout(() => {
      rect.animate('angle', 45, {
        onChange: this.canvas.renderAll.bind(this.canvas)
      })
      this.canvas.renderAll()
    }, 1000)
  },
  unmounted () {
    this.parallaxInstance.destroy()
  }
}
</script>

<style scoped>
#scene {
  overflow: hidden;
  width: 100%;
  background-color: #272F57;
  color: yellow;
  height: 100%;
}
</style>
