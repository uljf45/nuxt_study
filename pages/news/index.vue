<template>
  <div class="container">
    <h1 class="title" @click="refresh">刷新</h1>
    <div v-for="(item, idx) in list" :key="idx" class="item">
      <h4>{{item.title}}</h4>
      <div>
        {{item.content}}
      </div>
    </div>
  </div>
</template>

<script>

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
  methods: {
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
