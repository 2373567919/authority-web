<template>
  <div v-if="!props.item.hidden">
    <template v-if="!props.item.children">
      <a v-if="isExternal(props.item.path)" v-bind:href="props.item.path" target="_blank">
        <el-menu-item :index="props.basePath">
          <MenuItem :title="props.item.meta.title" :icon="props.item.meta.icon"></MenuItem>
        </el-menu-item>
      </a>
      <router-link v-else :to="props.basePath">
        <el-menu-item :index="props.basePath">
          <MenuItem :title="props.item.meta.title" :icon="props.item.meta.icon"></MenuItem>
        </el-menu-item>
      </router-link>
    </template>

    <el-sub-menu v-else :index="props.item.path">
      <template #title>
        <MenuItem :title="props.item.meta.title" :icon="props.item.meta.icon"></MenuItem>
      </template>
      <sidebar-item :key="child.path+index" :item="child" v-for="(child,index) in item.children"
                    :base-path="resolvePath(child.path)"></sidebar-item>
    </el-sub-menu>
  </div>
</template>

<script setup>
import MenuItem from '@/layout/components/SideBar/item'
import { isExternal } from '@/utils/validate'

const props = defineProps({
  item: {
    type: Object,
    required: true
  },
  basePath: {
    type: String,
    default: ''
  }
})
const resolvePath = (routePath) => {
  return props.basePath + '/' + routePath
}
</script>

<style scoped>

</style>
