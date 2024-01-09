<script setup>
import supabase from '@/supabase'
import { onMounted, ref } from 'vue'
import {
  IconOutbound
} from '@tabler/icons-vue'

const comp = ref([])

// const imgPath s= "@/assets/lomba/"

onMounted(async() => {
  let login = await supabase.auth.signInWithPassword({
  email: 'ahmadfadilah202003@gmail.com',
  password: '@Qwerty1234567'
  })
  
  let { data: competitions, error } = await supabase
  .from('competitions') // Skill issues realll no cap🧢🧢🧢🧢kwkwkwkw
  .select('*')
  .order('comp_name', 'asc')        
  // console.log(competitions)
  comp.value = competitions
  })

</script>

<template>
<section class="flex flex-wrap gap-[2.5rem] py-[5rem] items-center justify-center px-3 md:px-3 bg-gray-100">
  <div class="bg-hijau-difest rounded-xl max-w-sm transition-transform transform hover:scale-105 dark:bg-hijau-difest h-[55rem] shadow-xl" v-for="(c, index) in comp" :key="index">
    <img class="rounded-lg mx-auto my-3 bg-white w-[95%]" :src="c.comp_image" :alt="'Image of '+ index">
    <div class="p-[2rem] rounded-lg bg-transparent dark:bg-biru-bg-difest dark:border-biru-bg-difest">
        <h5 class="mb-2 text-3xl font-semibold tracking-tight text-gray-900 dark:text-kuning-difest">{{ c.comp_name }}</h5>
        <p class="mb-3 font-serif text-black dark:text-black text-justify" v-html="c.comp_desc">
        </p>
    </div>
    <div class="fixed bottom-5 left-0 right-0">
      <div class="flex gap-2 flex-wrap justify-evenly">
        <a href="https://bit.ly/Form-Pendaftaran-Difest2024" class="inline-flex items-center font-mono text-black bg-kuning-difest rounded-md p-2" target="_blank">
            Daftar Sekarang
            <IconOutbound class="pl-1"/>
        </a>
        <router-link
        :to="'#'"
        class="inline-flex items-center font-mono text-black bg-kuning-difest rounded-md p-2">
            Info Selengkapnya
            <IconOutbound class="pl-1"/>
        </router-link>
      </div>
    </div>
  </div>
</section>
</template>