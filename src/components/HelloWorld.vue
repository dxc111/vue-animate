<template>
<div>
  <div id="hello" ref="echart"></div>
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
/* import Swiper from 'swiper'
import 'swiper/dist/css/swiper.min.css' */

export default {
  name: 'HelloWorld',
  data () {
    return {
      datas: {},
      options: {}
    }
  },
  methods: {
  },
  created () {
    const that = this
    that.datas = {
      title: '',
      dataset: {
        '衬衫': {
          id: '001',
          data: 5
        },
        '羊毛衫': {
          id: '002',
          data: 20
        },
        '雪纺衫': {
          id: '003',
          data: 26
        },
        '裤子': {
          id: '004',
          data: 10
        },
        '高跟鞋': {
          id: '005',
          data: 10
        },
        '袜子': {
          id: '006',
          data: 20
        }
      }
    }
    const options = {
      title: {
        text: '',
        left: 'center'
      },
      tooltip: {},
      xAxis: {
        data: []
      },
      yAxis: {
        type: 'value',
        data: []
      },
      series: {
        name: '',
        type: '',
        data: []
      }
    }
    options.title.text = 'Ehcarts'
    options.series.name = '销量'
    options.series.type = 'bar'
    for (var key in that.datas.dataset) {
      options.xAxis.data.push(key)
      options.series.data.push(that.datas.dataset[key].data)
    }
    that.options = options
  },
  mounted () {
    const myChart = echarts.init(this.$refs.echart)
    const that = this
    // 绘制图表
    myChart.setOption(this.options)
    myChart.on('click', function (params) {
      console.info(`${params.name} ==> ${params.value} -- id: ${that.datas.dataset[params.name].id}`)
      // console.info(that.datas.dataset[params.name].id)
    })
    // eslint-disable-next-line
   /*  var mySwiper = new Swiper('.swiper-container', {
      pagination: {
        el: '.swiper-pagination',
        type: 'fraction'
      }
    }) */
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
