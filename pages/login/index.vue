<template>
  <div class="container login-container">
    <h1 class="title">
      login
    </h1>
    <form class="mt10">
      <div>
        <input type="text" name="username" v-model="loginForm.username" placeholder="请输入用户名">
      </div>
      <div class="mt10">
        <input type="password" name="password" v-model="loginForm.password" placeholder="请输入密码">
      </div>
      <div class="mt10">
        <button type="button" class="btn" @click="submit">
          <span>登 录</span>
        </button>
      </div>
    </form>

  </div>
</template>

<script>
import { login } from '@/api'
import Cookie from 'js-cookie'

export default {
  layout: 'test',
  data () {
    return {
      loginForm: {
        username: '',
        password: ''
      }
    }
  },
  mounted () {
    let rediretUrl = this.$route.query.ref;
  },
  methods: {
    submit () {
      let {username, password} = this.loginForm
      login(this.loginForm).then(res => {
        if (res.data.code == '1000') {  
          const auth = res.data['auth']
          this.$store.commit('setAuth', auth)

          Cookie.set('auth', auth)
          Cookie.set('name', username)
          Cookie.set('token', password)
          window.location = '/setting'
          // this.$router.push('/setting')
        }
      })
    }
  },
}
</script>

<style>
.login-container .btn {
  background-color: #00c58e;
  color: #fff;
  padding: 12px 24px;
  border: none;
  border-radius: 4px;
  font-size: 16px;
}
.login-container .btn:hover {
  cursor: pointer;
  background-color: #00e0a1;
}

input::placeholder {
  color: #999;
}

input {
  font-size: 16px;
  padding: 6px 10px;
}
input:focus {
  outline: none;
}
</style>
