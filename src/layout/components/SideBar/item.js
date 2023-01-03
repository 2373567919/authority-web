import { defineComponent } from 'vue'
import SvgIcon from '@/components/SvgIcon/SvgIcon.vue'
export default defineComponent({
  props: ['icon', 'title'],
  setup (props) {
    return () => {
      return (
          <div>
              <SvgIcon icon-class={props.icon}></SvgIcon>
            <span>{props.title}</span>
          </div>
      )
    }
  }
})
