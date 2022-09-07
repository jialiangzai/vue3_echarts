<!--
 * @Author: ‘jhx’ ‘123@qq.com’
 * @Date: 2022-09-06 15:49:56
 * @LastEditors: ‘jhx’ ‘123@qq.com’
 * @LastEditTime: 2022-09-06 15:55:02
 * @FilePath: \vue-element-admind:\vue3tool\echartvue3\src\App.vue
 * @Description: 
 * 
 * Copyright (c) 2022 by ‘jhx’ ‘123@qq.com’, All Rights Reserved. 
-->
<template>
  <router-view></router-view>
</template>
<script>
import { provide  } from "vue"
import * as echarts from 'echarts'
import axios from 'axios'
axios.defaults.baseURL="http://127.0.0.1:8888"
export default {
  setup() {
    provide ('echarts',echarts)
    provide ('axios',axios)
  },
}
</script>
<style lang="less">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  background: url("~@/assets/bg.jpg") top center no-repeat;
}
</style>
