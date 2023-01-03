<template>
  <div>
    <logo-component/>
    <el-scrollbar class="el-scrollbar">
      <el-menu
          active-text-color="#ffd04b"
          :background-color="menuBackground"
          class="el-menu-vertical-demo"
          default-active="2"
          text-color="#fff"
          :unique-opened="true"
          @open="handleOpen"
          @close="handleClose"
      >
        <sidebar-item :key="route.path+index" :item="route" v-for="(route,index) in sidebarRouters"
                      :base-path="route.path"/>
      </el-menu>
    </el-scrollbar>
  </div>
</template>

<script setup>
import LogoComponent from '@/layout/components/SideBar/LogoComponent.vue'
import { ref } from 'vue'
import SidebarItem from '@/layout/components/SideBar/SidebarItem.vue'
import { useStore } from 'vuex'

const store = useStore()
const menuBackground = ref('#304156')
const sidebarRouters = ref([])
sidebarRouters.value = store.getters.sidebarRouters
const handleOpen = (key, keyPath) => {
  console.log(key, keyPath)
}
const handleClose = (key, keyPath) => {
  console.log(key, keyPath)
}
</script>

<style scoped>
.el-scrollbar {
  height: calc(100% - 50px);
}
</style>
