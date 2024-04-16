---
layout: page
sidebar: false
---
<script setup>
import {
  VPTeamPage,
  VPTeamPageTitle,
  VPTeamMembers
} from 'vitepress/theme'

const members = [
  {
    avatar: '/blog/avatar.png',
    name: '🐮子荣',
    title: '主笔人',
    links: [
      { icon: 'github', link: 'https://github.com/XU-Nuo' },
    ]
  },
  {
    avatar: '/blog/avatar.png',
    name: ' 座山🐯',
    title: '冠名商与客座嘉宾',
    links: [
      { icon: 'github', link: 'https://github.com/XU-Nuo' },
    ]
  }
]
</script>

<VPTeamPage>
  <VPTeamPageTitle>
    <template #title>
      关于本站
    </template>
    <template #lead>
        一个小小的写作空间
    </template>
  </VPTeamPageTitle>
  <VPTeamMembers
    :members="members"
  />
</VPTeamPage>