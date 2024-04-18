import { h } from 'vue'
import Theme from 'vitepress/theme'
import './style/vars.css'
import MLayout from './components/MLayout.vue'

import RegisterSW from './components/RegisterSW.vue'

export default {
  ...Theme,
  Layout() {
    return h(MLayout, null, {
      'layout-bottom': () => h(RegisterSW)
    })
  },
}