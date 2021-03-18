<template>
  <div class="container">
    <div id="chart-container"></div>
    <h1 class="title btn" @click="refresh">刷新</h1>
    <div v-for="(item, idx) in list" :key="idx" class="item">
      <h4>{{item.title}}</h4>
      <div>
        {{item.content}}
      </div>
    </div>
  </div>
</template>

<script>
// import * as echarts from 'echarts/core.js';
// import {
//   LineChart
// } from 'echarts/charts'

// import {
//   TitleComponent,
//   TooltipComponent,
//   GridComponent
// } from 'echarts/components'

// import {
//   CanvasRenderer
// } from 'echarts/renderers'

// echarts.use(
//   [TitleComponent, TooltipComponent, GridComponent, LineChart, CanvasRenderer]
// )

export default {
  layout: 'test',
  // middleware: 'userAuth',
  validate(){
    console.log('LifeCycle validate news', new Date())
    return true
  },
  data () {
    return {
      list: []
    }
  },
  async fetch() {
    console.log('LifeCycle fetch news', new Date())

    // let { data } = await this.$axios({
    //     method: 'get',
    //     url: 'http://localhost:3000/news'
    // })
    let { data } = await this.$axios.get(
      'http://localhost:3000/news'
    )
    this.list = data
  },
  activated() {
    // Call fetch again if last fetch more than 30 sec ago
    if (this.$fetchState.timestamp <= Date.now() - 30000) {
      this.$fetch()
    }
  },
  created() {
    console.log('LifeCycle created news', new Date())
  },
  mounted () {
    if (process.client) this.initChart()
  },
  methods: {
    initChart() {
      var chartDom = document.getElementById('chart-container')
      var myChart = this.$echarts.init(chartDom)
      var option = {
         xAxis: {
          type: 'category',
          boundaryGap: false,
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
          type: 'value'
        },
        series: [{
          data: [820, 932, 901, 934, 1290, 1330, 1320],
          type: 'line',
          smooth: true,
          areaStyle: {}
        }]
      }

      myChart.setOption(option)
    },
    refresh() {
      this.$axios.get('/news')
    }
  },
}
</script>

<style lang="scss" scoped>
@import '/assets/sass/layout.scss';

.container {
  position: relative;
  .title {
    @include abs-center;
  }
}

#chart-container {
  width: 600px;
  height: 300px;
}

.item {
  display: flex;
  flex-direction: row;
  align-items: center;
  @include flex-center-horizontal;
  h4 {
    width: 80px;
    color: $color-primary;
  }
}

</style>
