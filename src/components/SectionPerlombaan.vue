<script setup>
import supabase from '@/supabase'
import { onMounted, ref } from 'vue'
import {
  IconOutbound
} from '@tabler/icons-vue'
import axios from 'axios'

const comp = ref([])

const getDataCompetition = async () => {
  const dataComp = await axios.get(`http://localhost:3030/api/competitions`)
  // console.log(dataComp)
  comp.value = dataComp.data
}

onMounted(() => {
  getDataCompetition()
  })

</script>

<template>
<section class="flex flex-wrap gap-[2.5rem] py-[5rem] items-center justify-center px-3 md:px-3 bg-gray-100">
  <div class="card w-96 shadow-3xl h-[60rem] transition-transform transform hover:scale-105" v-for="(c, index) in comp" :key="index">
    <figure><img :src="c.comp_image" class="bg-neutral-200" :alt="'Image of '+ index"/></figure>
    <div class="card-body bg-hijau-difest rounded-b-xl">
      <h2 class="card-title text-kuning-difest">{{ c.comp_name }}</h2>
      <p class="text-neutral-950 text-justify" v-html="c.comp_desc"></p>
      <div class="card-actions justify-end gap-3">
        <button class="btn btn-block bg-kuning-difest text-neutral-950 border-0 hover:text-neutral-100">Lihat Selengkapnya! 
          <IconOutbound />
        </button>
        <button class="btn btn-block bg-kuning-difest text-neutral-950 border-0 hover:text-neutral-100">Daftar Sekarang!
          <IconOutbound />
        </button>
      </div>
    </div>
  </div>
  <!-- <div class="bg-hijau-difest rounded-xl max-w-sm transition-transform transform hover:scale-105 dark:bg-hijau-difest h-[55rem] shadow-xl" v-for="(c, index) in comp" :key="index">
    <img class="rounded-lg mx-auto my-3 bg-white w-[95%]" :src="c.comp_image" :alt="'Image of '+ index">
    <div class="p-[2rem] rounded-lg bg-transparent dark:bg-biru-bg-difest dark:border-biru-bg-difest">
        <h5 class="mb-2 text-3xl font-semibold tracking-tight text-gray-900 dark:text-kuning-difest">{{ c.comp_name }}</h5>
        <p class="mb-3 font-serif text-neutral-950 text-justify" v-html="c.comp_desc">
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
  </div> -->
</section>
</template>