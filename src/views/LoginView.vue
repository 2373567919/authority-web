<template>
  <div class="login">
    <el-form class="login-form" :model="loginForm" :rules="loginRules" ref="loginFormRef">
      <h3 class="title">后台管理系统</h3>
      <el-form-item prop="username">
        <el-input placeholder="账号" v-model="loginForm.username"></el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input type="password" placeholder="密码" v-model="loginForm.password"></el-input>
      </el-form-item>
      <el-form-item prop="code">
        <el-input placeholder="验证码" v-model="loginForm.code" style="width: 63%">></el-input>
        <div class="div-space"></div>
        <div class="login-code">
          <img :src="codeUrl" alt="" class="login-code-img" @click="getCode()">
        </div>
      </el-form-item>
      <el-checkbox v-model="loginForm.rememberMe" style="margin: 0 0 25px 0">记住密码</el-checkbox>
      <el-form-item style="width: 100%">
        <el-button type="primary" style="width: 100%" @click="handleLogin(loginFormRef)"><span>登 录</span></el-button>
      </el-form-item>
    </el-form>
    <div class="el-login-footer">
      <span>Copyright © 2018-2022 ruoyi.vip All Rights Reserved.</span>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref, onMounted, watch } from 'vue'
import { getCodeImg } from '@/api/login'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'

const router = useRouter()
const store = useStore()
const loginForm = reactive({
  username: 'admin',
  password: 'admin123',
  code: '',
  uuid: '',
  rememberMe: false
})
const loginFormRef = ref()
const codeUrl = ref('')
let captchaOnOff = true
const loginRules = {
  username: [{
    required: true,
    tigger: 'blur',
    message: '请输入用户名'
  }],
  password: [{
    required: true,
    tigger: 'blur',
    message: '请输入密码'
  }],
  code: [{
    required: true,
    tigger: 'blur',
    message: '请输入验证码'
  }]
}
const redirect = ref(undefined)
const getCode = () => {
  getCodeImg().then(res => {
    captchaOnOff = res.captchaOnOff === undefined ? true : res.captchaOnOff
    if (captchaOnOff) {
      codeUrl.value = 'data:image/gif;base64,' + res.img
      loginForm.uuid = res.uuid
    }
  })
}
const handleLogin = (loginFormRef) => {
  loginFormRef.validate((valid) => {
    if (valid) {
      store.dispatch('Login', loginForm).then(res => {
        router.push({
          path: redirect.value || '/'
        })
      }).catch(error => {
        console.log(error)
        if (captchaOnOff) {
          getCode()
        }
      })
    }
  })
}
watch(() => router.currentRoute.value, toPath => {
  redirect.value = toPath.query.redirect
}, {
  immediate: true,
  deep: true
})
onMounted(() => {
  getCode()
})
</script>

<style scoped lang="scss">
.login {
  height: 100%;
  background-image: url("@/assets/images/login-background.jpg");
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
}

.title {
  color: #707070;
  text-align: center;
  margin: 0 auto 30px;
}

.login-form {
  box-sizing: border-box;
  width: 400px;
  border-radius: 6px;
  background: white;
  padding: 25px 25px 5px 25px;
}

.el-login-footer {
  height: 40px;
  line-height: 40px;
  position: fixed;
  bottom: 0;
  color: white;
  font-size: 12px;
  letter-spacing: 1px;
  font-family: Arial, system-ui;
}

.div-space {
  width: 4%;
}

.login-code {
  width: 33%;
}

.login-code-img {
  width: 100%;
  height: 37px;
  cursor: pointer;
}
</style>
