<template>
<div>
  <div id="hello"></div>
  <div class="swiper-container">
    <!-- Additional required wrapper -->
    <div class="swiper-wrapper">
        <!-- Slides -->
        <div class="swiper-slide">Slide 1</div>
        <div class="swiper-slide">Slide 2</div>
        <div class="swiper-slide">Slide 3</div>
    </div>
    <!-- If we need pagination -->
    <div class="swiper-pagination"></div>
</div>
</div>
</template>

<script>
import echarts from 'echarts'
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.min.css'

export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  computed: {
    options () {
      return {
        title: {
          text: 'ECharts 入门示例'
        },
        tooltip: {},
        xAxis: {
          data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
        },
        yAxis: {},
        series: [
          {
            name: '销量',
            type: 'bar',
            data: [5, 20, 36, 10, 10, 20]
          }
        ]
      }
    }
  },
  mounted () {
    const myChart = echarts.init(document.getElementById('hello'))
    // 绘制图表
    console.info(myChart)
    myChart.setOption(this.options)
    myChart.on('click', function (params) {
      params.color = '#1E71B1'
      console.info(params)
    })
    // eslint-disable-next-line
    var mySwiper = new Swiper('.swiper-container', {
      pagination: {
        el: '.swiper-pagination',
        type: 'fraction'
      }
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#hello {
  height: 50vh;
}
.swiper-slide{
  width: 100%;
  height: 30vh;
}
</style>
