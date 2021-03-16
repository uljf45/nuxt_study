<template>
  <div class="container">
    slug --> {{ $route.query.search }}
    <div class="btn" @click="testWatchQuery">Click to Test WatchQuery</div>
  </div>
</template>

<script>
export default {
  layout: 'test',
  name: "SlugIndex",
  async asyncData (ctx) {
    await fetch('http://10.42.7.182:8088/api/getCount', {
    headers: {
      authorization: 'czm123456'
    }
    })
    // console.log(ctx, this)
    return {
      slug: ctx.query.search
    }
  },
  watchQuery: ['search'],
  methods: {
    testWatchQuery () {
      this.$router.push({
        path: '/error',
        query: {
          search: Math.random() + ''
        }
      })
    }
  },

}
</script>

<style>

</style>