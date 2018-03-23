<template>
  <div>
    <canvas id="myCanvas" resize></canvas>
  </div>
</template>

<script>
import {paper} from 'paper'
// import wow from 'wowjs/dist/wow'

export default {
  name: 'Paper',
  mounted () {
    var canvas = document.getElementById('myCanvas')
    // Create an empty project and a view for the canvas:
    paper.setup(canvas)
    // Adapted from the following Processing example:
    // http://processing.org/learning/topics/follow3.html

    // The amount of points in the path:
    var points = 25

    // The distance between the points:
    var length = 35
    var path = new paper.Path({
      strokeColor: '#E4141B',
      strokeWidth: 20,
      strokeCap: 'round'
    })
    var start = new paper.Point(paper.view.center.x / 10, paper.view.center.y)
    console.info(start)
    for (var i = 0; i < points; i++) {
      path.add(new paper.Point((start.x + i * length), start.y))
    }

    paper.view.draw()
    // eslint-disable-next-line
    paper.view.onMouseMove = (event) => {
      path.firstSegment.point = event.point
      for (var i = 0; i < points - 1; i++) {
        var segment = path.segments[i]
        var nextSegment = segment.next
        var vectorPoint = this.minusPoint(segment.point, nextSegment.point)
        vectorPoint.length = length
        nextSegment.point = this.minusPoint(segment.point, vectorPoint)
      }
      path.smooth({ type: 'continuous' })
    }
    paper.view.onMouseDown = (event) => {
      path.fullySelected = true
      path.strokeColor = '#e08285'
    }
    paper.view.onMouseUp = (event) => {
      path.fullySelected = false
      path.strokeColor = '#e4141b'
    }
  },
  methods: {
    minusPoint (prePonit, netxPoint) {
      return new paper.Point(prePonit.x - netxPoint.x, prePonit.y - netxPoint.y)
    }
  }
}
</script>

<style scoped>
#myCanvas{
  width: 100vw;
  height: 80vh;
}
</style>
