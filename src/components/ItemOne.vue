<template>
  <div>
    1
    <div class="chart" id="oneChart">图表</div>
  </div>
</template>

<script>
import { inject, onMounted } from 'vue'
export default {
  setup() {
    let $echarts = inject('echarts')
    let $http = inject('axios')
    async function getState() {
      let oneData = await $http({ url: '/one/data' })
      console.log(oneData)
    }
    onMounted(() => {
      getState()
      let myChart = $echarts.init(document.getElementById('oneChart'))
      myChart.setOption({
        gird: {
          left: '20',
          containLabel: true,
        },
        // 设置柱状图
        xAxis: {
          type: 'value',
          // axisLabel: {
          //   show: true,
          //   textStyle: {
          //     color: '#fff',
          //   },
          // },
        },
        yAxis: {
          type: 'category',
          // data: xData,
          // axisLabel: {
          //   show: true,
          //   textStyle: {
          //     color: '#fff',
          //   },
          // },
        },
        series: [
          {
            // 样式设置
            // itemStyle: {
            //   normal: {
            //     barBorderRadius: [0, 10, 10, 0],
            //     color: new $echarts.graphic.LinearGradient(0, 0, 1, 0, [
            //       {
            //         offset: 0,
            //         color: '#005eaa',
            //       },
            //       {
            //         offset: 0.5,
            //         color: '#339ca8',
            //       },
            //       {
            //         offset: 1,
            //         color: '#cda819',
            //       },
            //     ]),
            //   },
            // },
            // data: yData,
            type: 'bar',
          },
        ],
      })
    })
    return {
      getState,
    }
  },
}
</script>

<style lang="less" scoped></style>
