<script setup>

import { useRoute, useRouter, RouterLink } from 'vue-router'
import { computed } from 'vue'
const route = useRoute()
const router = useRouter()

const Menus = computed(() => {
  return router
  .getRoutes()
  .filter((r) =>  r.name && r.meta.showMenu == true && r.meta.metaMode == 'guest')
})

const MenuResponsiveMode = computed(() => {
  return router
  .getRoutes()
  .filter((r) => r.name && r.meta.showMenu === true && r.meta.metaMode == 'guest')
})

// Menus.forEach((r, i) => {
//   console.log(r)
// })
// console.log(Menus)

</script>

<template>
<div class="navbar bg-base-100">
  <div class="navbar-start">
    <div class="dropdown">
      <div tabindex="0" role="button" class="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabindex="0" class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52" >
        <li v-for="(r, index) in MenuResponsiveMode" :key="index"><router-link :to="r.path">{{ r.name }}</router-link></li>
      </ul>
    </div>
    <img src="/logo-himpunan.png" class="h-8" alt="Flowbite Logo" />
    <img src="/difest.png" class="h-8" alt="Flowbite Logo" />
    <a class="pl-4 text-xl">DIFEST 5.0</a>
  </div>
  <div class="navbar-center hidden lg:flex">
    <ul class="menu menu-horizontal px-1" v-for="(r, i) in Menus" :key="i">
      <li><router-link :to="r.path">{{ r.name }}</router-link></li>
    </ul>
  </div>
  <div class="navbar-end">
    <router-link to="/login" class="btn bg-hijau-difest-hover text-neutral-100">Login</router-link>
  </div>
</div>
</template>