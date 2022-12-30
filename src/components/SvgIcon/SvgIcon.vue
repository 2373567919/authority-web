<template>
  <svg :class="svgClassValue">
    <use :xlink:href="iconNameValue"></use>
  </svg>
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
  return `#icon-${props.iconClass}`
})
</script>
<style scoped>

</style>
