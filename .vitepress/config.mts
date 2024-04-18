import { defineConfig } from 'vitepress'
import { withPwa } from '@vite-pwa/vitepress'

// https://vitepress.dev/reference/site-config
export default withPwa(defineConfig({
  title: "🐮子荣的想法",
  description: "由 座山🐯 独家冠名的写作空间",
  base: "/blog/",
  head: [
    [
      'link',
      { rel: 'icon', href: '/favicon.ico' }
    ],
    [
        'link',
        { rel: 'apple-touch-icon', href: '/apple-touch-icon.png'}
      ],
    // [
    //   'meta',
    //   { rel: 'theme-color', href: '#ffffff'}
    // ],
  ],
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
      { icon: 'github', link: 'https://github.com/XU-Nuo' }
    ],

    search: {
        provider: 'local'
    },

    editLink: {
        pattern: 'https://github.com/XU-Nuo/blog/blob/main/:path',
        text: 'View source on GitHub'
    }
  },
  pwa: {
    registerType: 'autoUpdate',
    manifest: {
        name: '🐮子荣的想法',
        short_name: '🐮子荣的想法',
        theme_color: '#ffffff',
        icons: [
          {
            src: 'pwa-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: 'pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png',
          },
          {
            src: 'pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any maskable',
          },
        ],
      }
  }
}))
