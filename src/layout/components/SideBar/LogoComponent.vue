<template>
  <div class="sidebar-logo-container">
    <router-link to="/" class="sidebar-logo-link">
      <img :src="logoImg" alt="" class="sidebar-logo">
      <h1 v-text="title" class="sidebar-title"></h1>
    </router-link>
  </div>
</template>

<script setup>
import logoImg from '@/assets/logo/logo.png'

const title = '若依管理系统'

</script>

<style scoped lang="scss">
.sidebar-logo-container{
  width: 100%;
  height: 50px;
  text-align: center;
  & .sidebar-logo-link{
    height: 100%;
    width: 100%;
    display: inline-block;
    & .sidebar-logo{
      width: 32px;
      height: 32px;
      vertical-align: middle;
      margin-right: 12px;
    }
    & .sidebar-title{
      display: inline-block;
      color: white;
      font-size: 14px;
      vertical-align: middle;
      font-weight: 600;
    }
  }
}
</style>
