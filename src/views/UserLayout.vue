<script setup>
import UserFooter from '@/views/layout/UserFooter.vue'
import { useRoute, useRouter, RouterLink } from 'vue-router'
import { computed, onBeforeMount } from 'vue'
import { IconMenu2 } from '@tabler/icons-vue'
import Swal from 'sweetalert2';
const route = useRoute()
const router = useRouter()

const Menus = computed(() => {
  return router
  .getRoutes()
  .filter((r) =>  r.name && r.meta.showMenu == true && r.meta.metaMode == 'participant')
})
onBeforeMount(() => {
  const role = JSON.parse(localStorage.getItem('user'))
  if (role?.role !== route.meta.metaMode) {
    router.push('/blocked')
  }
})

const handleLogout = () => {
  Swal.fire({
  title: "Logout?",
  text: "Apakah anda ingin logout? Apakah sudah melengkapi kelengkapan karya?",
  icon: "question",
  showCancelButton: true,
  confirmButtonColor: "#3085d6",
  cancelButtonColor: "#d33",
  confirmButtonText: "Ya"
}).then((result) => {
  if (result.isConfirmed) {
    localStorage.clear()
    router.push('/login')
  }
});
}
</script>


<template>
  <div class="drawer lg:drawer-open">
  <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
  <div class="drawer-content flex flex-col items-center justify-center h-screen bg-base-200">
    <!-- Page content here -->
    <label for="my-drawer-2" class="btn btn-primary drawer-button lg:hidden absolute z-0 top-[20px] left-[20px]">
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
        <button @click="handleLogout">Logout</button>
        <!-- <router-link to="/login">Logout</router-link> -->
      </li>
    </ul>
  </div>
</div>
<UserFooter />
</template>