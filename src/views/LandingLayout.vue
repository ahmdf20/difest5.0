<script setup>
import Navbar from '@/views/layout/Navbar.vue'
import Footer from '@/views/layout/Footer.vue'
// import { useRouter, useRoute } from 'vue-router'

</script>

<template>
  <header>
    <Navbar />
  </header>
  <main>
    <RouterView />
  </main>
  <Footer />
</template>

<style scoped>
</style>