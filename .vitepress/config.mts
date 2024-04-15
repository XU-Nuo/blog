import { defineConfig } from 'vitepress'
import { withPwa } from '@vite-pwa/vitepress'

// https://vitepress.dev/reference/site-config
export default withPwa(defineConfig({
  title: "XU-Nuo's Blog",
  description: "A VitePress Site",
  base: "/blog/",
  markdown: {
    math: true
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/XU-Nuo/blog' }
    ],

    search: {
        provider: 'local'
    },

    editLink: {
        pattern: 'https://github.com/XU-Nuo/blog/blob/main/:path',
        text: 'View source on GitHub'
    }
  }
}))
