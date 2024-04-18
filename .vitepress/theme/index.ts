import { h } from 'vue'
import Theme from 'vitepress/theme'
import './style/vars.css'
import Layout from './Layout.vue'

import RegisterSW from './components/RegisterSW.vue'

export default {
  ...Theme,
  Layout() {
    return h(Theme.Layout, null, {
      'layout-bottom': () => h(RegisterSW)
    })
  }
}