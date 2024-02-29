<script setup>
import { onMounted, ref } from 'vue'
import {
  IconDownload,
  IconOutbound
} from '@tabler/icons-vue'
// Countdown
const targetTime = ref(new Date('March 2, 2024 23:59:59').getTime())
const days = ref(0)
const hours = ref(0)
const minutes = ref(0)
const seconds = ref(0)
const countdownExpired = ref(false)

const updateCountdown = () => {
  const currentDate = new Date().getTime()
  const timeDifference = targetTime.value - currentDate

  // Check if the countdown has expired
  if (timeDifference <= 0) {
    clearInterval(countdownInterval)
    countdownExpired.value = true
    return
  }

  // Calculate days, hours, minutes, and seconds
  days.value = Math.floor(timeDifference / (1000 * 60 * 60 * 24))
  hours.value = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  minutes.value = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60))
  seconds.value = Math.floor((timeDifference % (1000 * 60)) / 1000)
}

onMounted(() => {
  // Update the countdown every second
  countdownInterval = setInterval(updateCountdown, 1000)
});

const stopCountdown = () => {
  clearInterval(countdownInterval)
};

let countdownInterval

const downloadPDF = () => {
  const pdfPath = '/booklet-difest-2024.pdf'
  const link = document.createElement('a')
  link.href = pdfPath
  link.download = 'Booklet_DIFEST_2024.pdf'
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
}

</script>
<template>
  <section class="grid bg-kuning-difest py-[15rem]" id="count-down" aria-label="Section Counting down">
    <div v-if="countdownExpired">
      <h5 class="font-mono text-3xl text-black text-center mb-[3rem]">Pendaftaran Ditutup!</h5>
    </div>
    <div class="grid grid-flow-col gap-5 text-center auto-cols-max justify-center mb-[3rem]" v-else>
      <div class="flex flex-col p-2 bg-neutral rounded-box text-neutral-100">
        <span class="countdown font-mono text-5xl">
          <span :style="[`--value:${days}; color: white;`]"></span>
        </span>
        days
      </div> 
      <div class="flex flex-col p-2 bg-neutral rounded-box text-neutral-100">
        <span class="countdown font-mono text-5xl">
          <span :style="[`--value:${hours};`]"></span>
        </span>
        hours
      </div> 
      <div class="flex flex-col p-2 bg-neutral rounded-box text-neutral-100">
        <span class="countdown font-mono text-5xl">
          <span :style="[`--value:${minutes};`]"></span>
        </span>
        min
      </div> 
      <div class="flex flex-col p-2 bg-neutral rounded-box text-neutral-100">
        <span class="countdown font-mono text-5xl">
          <span :style="[`--value:${seconds};`]"></span>
        </span>
        sec
      </div>
    </div>
    <div class="flex gap-[3rem] flex-wrap justify-center">
        <a href="https://bit.ly/Form-Pendaftaran-Difest2024" class="btn btn-wide bg-neutral text-neutral-100" target="_blank">
            Daftar Sekarang
            <IconOutbound class="pl-1" />
        </a>
        <button
        @click="downloadPDF()" target="_blank"
        class="btn btn-wide bg-neutral text-neutral-100 ">
            Download Booklet
            <IconDownload class="pl-1" />
        </button>
      </div>
  </section>
</template>