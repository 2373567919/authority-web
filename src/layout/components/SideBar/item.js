import { defineComponent } from 'vue'

export default defineComponent({
  props: ['icon', 'title'],
  setup (props) {
    return () => {
      return <span>{props.title}</span>
    }
  }
})
