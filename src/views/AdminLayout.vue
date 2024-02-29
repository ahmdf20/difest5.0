<script setup>
import UserFooter from '@/views/layout/UserFooter.vue'
import { useRoute, useRouter, RouterLink } from 'vue-router'
import { computed, onMounted, onBeforeMount } from 'vue'
import { IconMenu2 } from '@tabler/icons-vue'
const route = useRoute()
const router = useRouter()

const Menus = computed(() => {
  return router
  .getRoutes()
  .filter((r) =>  r.name && r.meta.showMenu == true && r.meta.metaMode == 'admin')
})

onBeforeMount(() => {
  const role = JSON.parse(localStorage.getItem('user'))
  if (role?.role !== route.meta.metaMode) {
    router.push('/blocked')
  }
  // console.log(route.meta.metaMode != role.role)
})

</script>


<template>
  <div class="drawer lg:drawer-open">
  <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
  <div class="drawer-content flex flex-col items-center justify-center h-screen bg-base-200">
    <!-- Page content here -->
    <label for="my-drawer-2" class="btn btn-primary drawer-button lg:hidden absolute z-0 top-[30px] left-[30px]">
      <IconMenu2 />
    </label>
    <RouterView />
  </div> 
  <div class="drawer-side">
    <label for="my-drawer-2" aria-label="close sidebar" class="drawer-overlay"></label> 
    <ul class="menu p-4 w-80 min-h-full bg-base-300 text-base-content gap-3">
      <h1 class="text-3xl text-center mb-5 font-extrabold">DIFEST 5.0</h1>
      <!-- Sidebar content here -->
      <li v-for="(m, index) in Menus" :key="index">
        <router-link :to="m.path" :class="{
                  ['router-link-active router-link-exact-active']:
                    m.name == router.currentRoute.value.name
                }">{{ m.name }}</router-link>
      </li>
      <li>
        <router-link to="/login">Logout</router-link>
      </li>
    </ul>
  </div>
</div>
<UserFooter />
</template>