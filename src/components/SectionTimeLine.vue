<script setup>
import supabase from '@/supabase'
import { onMounted, ref } from 'vue'
import axios from 'axios'
const timelines = ref([])

const getDataTimeline = async() => {
  const dataTimeline = await axios.get(`https://server-difest5-0.himatikom-polsub.com/api/timelines`)
  timelines.value = dataTimeline.data
}

onMounted(() => {
  getDataTimeline()
})
</script>
<template>
  <section class="flex justify-center bg-kuning-difest py-[3rem] lg:pb-[12rem]">
    <ul class="timeline timeline-vertical lg:timeline-horizontal">
      <li v-for="(t, index) in timelines" :key="index">
        <hr class="bg-neutral-950">
        <div class="timeline-start grid text-center lg:flex gap-2 text-neutral-950"> <span>{{ t.date_from.substring(0, 10) }}</span> s.d <span>{{ t.date_to.substring(0, 10) }}</span> </div>
        <div class="timeline-middle">
          <div class="text-neutral-950" v-html="t.icon"></div>
        </div>
        <div class="timeline-end timeline-box grid max-w-[20rem] bg-neutral border-none text-neutral-100">
          <h2 class="text-xl font-extrabold">{{ t.event_name }}</h2>
          <p class="text-justify">{{ t.event_detail }}</p>
        </div>
        <hr class="bg-neutral-950">
      </li>
    </ul>
  </section>
</template>