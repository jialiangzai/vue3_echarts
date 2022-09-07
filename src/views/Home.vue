<template>
  <div>
    <header>
      <h1>大数据可视化</h1>
    </header>
    <section class="container">
      <section class="itemLeft">
        <itemBox>
          <item-one />
        </itemBox>
        <itemBox>
          <item-two></item-two>
        </itemBox>
      </section>
      <section class="itemCenter"><ItemMap/></section>
      <section class="itemRight">
        <itemBox>
          <item-three></item-three>
        </itemBox>
        <itemBox>
          <item-four></item-four>
        </itemBox>
      </section>
    </section>
  </div>
</template>

<script>
import itemBox from '../components/item.vue'
import ItemOne from '@/components/ItemOne.vue'
import ItemTwo from '@/components/ItemTwo.vue'
import ItemThree from '@/components/ItemThree.vue'
import itemFour from '@/components/itemFour.vue'
import ItemFour from '../components/itemFour.vue'
import ItemMap from '../components/itemMap.vue'
import { inject } from 'vue'
export default {
  components: {
    itemBox,
    ItemOne,
    ItemTwo,
    ItemThree,
    itemFour,
    ItemFour,
    ItemMap
  },
  setup() {
    let $echarts = inject('echarts')
    let $axios = inject('axios')
    console.log($axios, $echarts)
  },
}
</script>

<style lang="less">
header {
  height: 1rem;
  width: 100%;
  background-color: rgba(0, 0, 255, 0.2);
  h1 {
    font-size: 0.375rem;
    color: #fff;
    text-align: center;
    line-height: 1rem;
  }
}
.container {
  // 最大最小宽度
  min-width: 1200px;
  max-width: 2048px;
  margin: 0 auto;
  border: 1px solid red;
  padding: 0.125rem 0.125rem 0;
  // 设置flex布局
  display: flex;
  .itemLeft,
  .itemRight {
    flex: 3;
  }
  .itemCenter {
    flex: 5;
    height: 10.5rpx;
    border: 1px solid blue;
    padding: 0.125rem;
    margin: 0.25rem;
  }
}
</style>
