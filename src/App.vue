<script setup>
// This starter template is using Vue 3 <script setup> SFCs

import { useRouter } from 'vue-router';
import { useStore } from './store';
import { toRaw } from 'vue';
// // Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
const store = useStore()
const router = useRouter()
// store.addMenu(router)
router.push({
  name: 'home'
})
</script>

<template>
  <router-view></router-view>
</template>

<style >

#app {
  height: 100%;
}
</style>
