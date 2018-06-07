<template>
  <div id="echart" ref="echarts"></div>
</template>

<script>
import echarts from 'echarts'

export default {
  name: 'Echarts',
  mounted () {
    const myChart = echarts.init(this.$refs.echarts)
    // const that = this
    const datas = [7, 5, 3, 3, 2, 1, 1, 1, 1, 1, 1, 1]
    const sum = datas.reduce((pre, current) => pre + current)
    let precent = []
    let addedp = []
    datas.map((v) => {
      precent.push((v / sum * 100).toFixed(2))
    })
    precent.map((v, index) => {
      addedp.push(precent.slice(0, index + 1).reduce((p, c) => (parseFloat(p) + parseFloat(c)).toFixed(2)))
    })
    const options = {
      title: {
        text: '柏拉图',
        bottom: '0',
        left: 'center'
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'cross'
        },
        formatter: '{b}: <br />{a0}: {c0} <br> {a1}: {c1} %',
        extraCssText: 'text-align: left'
      },
      toolbox: {
        feature: {
          restore: { show: true },
          saveAsImage: { show: true }
        }
      },
      legend: {
        data: ['问题数量', '百分比']
      },
      xAxis: [
        {
          type: 'category',
          axisTick: {
            alignWithLabel: true
          },
          data: [
            '1月',
            '2月',
            '3月',
            '4月',
            '5月',
            '6月',
            '7月',
            '8月',
            '9月',
            '10月',
            '11月',
            '12月'
          ]
        }
      ],
      yAxis: [
        {
          type: 'value',
          name: '问题数量',
          min: 0,
          position: 'left'
        },
        {
          type: 'value',
          name: '百分比',
          min: 0,
          max: 100,
          position: 'right',
          axisLabel: {
            formatter: '{value} %'
          }
        }
      ],
      series: [
        {
          name: '问题数量',
          type: 'bar',
          data: datas
        },
        {
          name: '百分比',
          type: 'line',
          data: addedp
        }
      ]
    }
    // 绘制图表
    myChart.setOption(options)
  }
}
</script>

<style>
#echart {
  height: 50vh;
}
</style>
