<template>
  <img :class="svgClassValue" :src="iconNameValue" alt="">
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  svgClass: {
    type: String,
    default: ''
  },
  iconClass: {
    type: String,
    default: ''
  }
})
const svgClassValue = computed(() => {
  if (props.svgClass) {
    return 'svg-icon ' + props.svgClass
  } else {
    return 'svg-icon'
  }
})
const iconNameValue = computed(() => {
  return `/svg/${props.iconClass}.svg`
})
</script>
<style scoped>
.svg-icon{
width: 1.3em;
height: 1.3em;
  margin-bottom: 18px;
  margin-right: 10px;
}
</style>
