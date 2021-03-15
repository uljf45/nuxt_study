<template>
  <div class="container">
    <h1 class="title">
      setting
    </h1>
    <div class="items">

      <div class="item">
        <div class="left">登陆状态:</div>
        <div class="right">
          <div class="btn" @click="logout">退出</div> 
        </div>
      </div>

      <div class="item">
        <div class="left">nuxt IP:</div>
        <div class="right">
          <div class="">{{nuxtIp}}</div> 
        </div>
      </div>

      <div class="item">
        <div class="left">your IP:</div>
        <div class="right">
          <div class="">{{yourIp}}</div> 
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import { logout } from '@/api'
import Cookie from 'js-cookie'

export default {
  layout: 'test',
  data () {
    return {
      nuxtIp: '',
      yourIp: '',
    }
  },
  fetch() {
    this.nuxtIp = this.$store.state.nuxtIp
    this.yourIp = this.$store.state.ip
  },
  methods: {
    async logout() {
      let res = await logout()
      Cookie.remove('auth')
      Cookie.remove('token')
      Cookie.remove('name')
      window.location = '/'
    } 
  }
}
</script>

<style>
.item {
  width: 600px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
.item .left {
  width: 200px;
  text-align: right;
}
.item .right {
  flex: 1;
}
.btn {
  display: inline-block;
  padding: 8px 2px;
  cursor: pointer;
}
.btn:hover {
  color: #315efb;
}
</style>
