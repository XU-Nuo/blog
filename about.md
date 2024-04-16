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
    avatar: '/avatar.png',
    name: '许诺',
    title: 'XU, Nuo',
    links: [
      { icon: 'github', link: 'https://github.com/XU-Nuo' },
    ]
  }
]
</script>

<VPTeamPage>
  <VPTeamPageTitle>
    <template #title>
      关于我
    </template>
    <template #lead>
      HPC Performance Engineer in Computational Science. Formly worked on virus, now on bridges.
    </template>
  </VPTeamPageTitle>
  <VPTeamMembers
    :members="members"
  />
</VPTeamPage>