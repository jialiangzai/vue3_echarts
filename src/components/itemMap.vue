<template>
  <div class="map" id="map"></div>
</template>

<script>
import { onMounted, reactive, inject } from 'vue'
export default {
  setup() {
    let $axios = inject('axios')
    let $echarts = inject('echarts')
    let mapData = reactive({})
    async function getState() {
      mapData = await $axios.get('/map/data')
      console.log(mapData)
    }
    onMounted(() => {
      getState().then(() => {
        console.log('map', mapData)
        $echarts.registerMap('china', mapData.data.chartMap)
        let myCharts = $echarts.init(document.getElementById('map'))
        myCharts.setOption({
          // 散点图数据
          // { name: "北京"， value: [116.46, 39.92, 4367] },
          // { name: "上海"， value: [121.48, 31.22, 8675] },
          // { name: "深圳"， value: [114.07, 22.62, 2461] },
          // { name: "广州"， value: [113.23, 23.16, 187] },
          // { name: "西安"， value: [108.45, 34, 3421] },
          tooltip: {
            trigger: 'item',
          },
          title: {
            text: '城市销量',
            left: '45%',
            textStyle: {
              color: '#50a3ba',
              fontSize: 20,
              textShadowBlur: 10,
              textShadowColor: '#33ffff',
            },
          },

          geo: {
            // 视觉映射器

            map: 'china',
            itemStyle: {
              areaColor: '#0099ff',
              borderColor: '#00ffff',
              shadowColor: 'rgba(230, 130, 70, 0.5)',
              shadowBlur: 30,
              focus: 'self',
            },
            show: true,

            label: {
              show: true,
            },
            zoom: 2,
            left: 50,
            right: 50,
            roam: true,
            center: [116.403931, 39.91328],
            visualMap: [
              {
                type: 'continumous',
                min: 100,
                max: 5000,
                calculable: true, // 滑动效果
                inRange: {
                  color: ['#50a3ba', '#eac736', '#d94e'],
                }, // 颜色
                textStyle: {
                  color: '#fff',
                },
              },
            ],
          },

          series: [
            {
              type: 'scatter',
              itemStyle: {
                color: 'red',
              },
              // 散点图设置为地理坐标
              coordinateSystem: 'geo',
              data: [
                { name: '北京', value: [116.46, 39.92, 4367] },
                { name: '上海', value: [121.48, 31.22, 8675] },
                { name: '深圳', value: [114.07, 22.62, 2461] },
                { name: '广州', value: [113.23, 23.16, 187] },
                { name: '西安', value: [108.45, 34, 3421] },
              ],
            },
          ],
        })
      })
    })
    return { getState, mapData }
  },
}
</script>

<style lang="less" scoped>
.map {
  width: 100%;
  height: 100%;
}
</style>
