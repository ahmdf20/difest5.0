<script setup>
import supabase from '@/supabase'
import { onMounted, ref } from 'vue'
const timelines = ref([])

onMounted(async() => {
  let login = await supabase.auth.signInWithPassword({
  email: 'ahmadfadilah202003@gmail.com',
  password: '@Qwerty1234567'
  })
  let { data: competition_timelines, error } = await supabase
    .from('competition_timelines')
    .select('*')
  // console.log(competition_timelines)
  timelines.value = competition_timelines
})
</script>
<template>
  <section class="bg-kuning-difest py-[3rem] md:py-[6rem] px-3">
    <div class="flex flex-wrap justify-center">
      <ol class="items-center sm:flex py-0 md:py-[3rem]" v-for="(tl, index) in timelines" :key="index">
        <li class="relative mb-6 sm:mb-0 h-[20rem] bg-white md:bg-transparent p-[1rem] md:p-0 md:shadow-none shadow-md rounded-lg">
            <div class="flex items-center justify-center">
                <div
                class="z-10 flex items-center justify-center w-[6rem] h-[6rem] bg-hijau-difest-hover text-white rounded-full ring-0 ring-hijau-difest-hover dark:bg-hijau-difest-hover sm:ring-8 dark:ring-hijau-difest-hover shrink-0">
                  <div v-html="tl.icon"></div>
                </div>
                <div class="hidden sm:flex w-full bg-gray-600 h-0.5 dark:bg-gray-700"></div>
            </div>
            <div class="mt-[2rem] sm:pe-8">
                <h3 class="text-lg font-semibold text-gray-900 dark:text-black">{{ tl.event_name }}</h3>
                <time class="block mb-2 font-sans text-sm leading-none text-black dark:text-black">Dari {{ tl.date_from }} Sampai {{ tl.date_to }}</time>
                <p class="w-[20rem] text-base font-serif text-black dark:text-black text-justify">{{ tl.event_detail }}</p>
              </div>
        </li>
    </ol>
    </div>
  </section>
</template>