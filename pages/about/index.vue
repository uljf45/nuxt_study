<template>
  <div class="container">
    <h1 class="title">
      about {{count}}
    </h1>
    <div @click="addCount">add Count</div>
    <br>
    <div @click="$fetch">refresh</div>
  </div>
</template>

<script>
export default {
  layout: 'test',
  name: 'aboutIndex',
  middleware: 'userAuth',
  validate(){
    console.log('LifeCycle validate about', new Date())
    return true
  },
  data () {
    return {
      count: null
    }
  },
  fetch () {
    console.log('LifeCycle fetch about', new Date())
    return this.$axios.get('/getCount').then(res => {
      if (!res.data.code) this.count = res.data
    })
  },
  created() {
    console.log('LifeCycle created about', new Date())

  },
  activated () {
    if (this.$fetchState.timestamp <= Date.now() - 30000) {
      this.$fetch()
    }
  },
  async asyncData ({ params }) {
    let renderedOn = process.client ? 'client' : 'server'
    return {
      renderedOn
    }
  },
  // async fetch() {
  //   // let { data } = await this.$axios({
  //   //     method: 'get',
  //   //     url: 'http://localhost:3000/news'
  //   // })
  //   let { data } = await this.$axios.get(
  //     'http://localhost:3000/getCount'
  //   )
  //   this.count = data
  // },
  methods: {
    addCount() {
      this.$axios.get('')
    }
  },
}
</script>

<style>

</style>
