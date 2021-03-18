import Vue from 'vue'
import * as echarts from 'echarts/core.js';
import {
  LineChart
} from 'echarts/charts'

import {
  TitleComponent,
  TooltipComponent,
  GridComponent
} from 'echarts/components'

import {
  CanvasRenderer
} from 'echarts/renderers'

echarts.use(
  [TitleComponent, TooltipComponent, GridComponent, LineChart, CanvasRenderer]
)

Vue.prototype.$echarts = echarts