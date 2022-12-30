<template>
  <div class="app-wrapper">
    <side-bar class="sidebar-container"/>
    <div class="main-container">
      <div>
        <nav-bar/>
        <tags-view/>
      </div>
      <app-main/>
    </div>
  </div>
</template>

<script setup>
import SideBar from '@/layout/components/SideBar/SideBar.vue'
import NavBar from '@/layout/components/NavBar.vue'
import TagsView from '@/layout/components/TagsView/TagsView.vue'
import AppMain from '@/layout/components/AppMain.vue'

</script>

<style scoped lang="scss">
.app-wrapper {
  width: 100%;
  height: 100%;
}
</style>
