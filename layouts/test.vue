<template>
  <div class="layout">
    <header>
      <nav>
        <a 
        v-for="(item, idx) in $store.state.menus" 
        :key="idx" 
        class="nav-item" 
        :class="{'active': target == (item.target.slice(1) ? item.target.slice(1) : 'index')}" 
        :to="'' + item.target"
        :href="$store.state.domainName + item.target"
        @click.prevent="goTo(item)"  
        >
          {{ item.name }}
        </a>
      </nav>
    </header>
    <Nuxt />
    <footer class="test-footer">
      render on --- {{renderedOn}}
    </footer>
  </div>
</template>

<script>
import { getMenus } from '@/api'
import Cookies from 'js-cookie'

export default {
  data () {
    return {
      target: '',
      menus: [
        // {name: "首页", target: '/'     },
        // {name: "新闻", target: '/news' },
        // {name: '关于', target: '/about'},
        // {name: '设置', target: '/setting',  vif: 'isLogin' },
        // {name: '登录', target: '/login',    vif: 'notLogin'},
        // {name: '注册', target: '/register', vif: 'notLogin'},
      ],
      renderedOn: ''
    }
  },
  fetch () {
    let renderedOn = process.client ? 'client' : 'server'
    this.renderedOn = renderedOn
  },
  watch: {
    $route (newv, oldv) {
      this.target = this.$route.name.split('-')[0]
      this.$fetch()
    }
  },
  created () {
    this.target = this.$route.name.split('-')[0]
  },
  methods: {
    goTo(item) {
      this.$router.push(item.target)
    }
  }
}
</script>

<style>
html {
  font-family:
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

.layout {
  display: flex;
  height: 100vh;
  flex-direction: column;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}

.layout nav {
  display: flex;
  flex-direction: row;
  justify-content: center;
  height: 40px;
  align-items: center;
}

.layout .nav-item {
  margin: 0 10px;
  transition: .3s ease color;
}
.layout .nav-item.active {
   color: #00c58e;
}

.test-footer {
  margin-top: 10px;
  height: 40px;
  line-height: 40px;
  font-size: 16px;
  color: #666;
  text-align: center;
  border-top: 1px solid #ccc;
}
</style>
