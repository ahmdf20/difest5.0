<script setup>
import { onMounted, ref } from 'vue'
import {
  IconDownload,
  IconOutbound
} from '@tabler/icons-vue'
// Countdown
const targetTime = ref(new Date('February 10, 2024 00:00:00').getTime())
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
};

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
      <h5 class="font-mono text-3xl text-black">Pendaftaran Ditutup!</h5>
    </div>
    <div class="grid mb-[3rem]" v-else>
      <h5 class="font-extrabold font-mono text-4xl text-black mb-3 text-center">Daftar Sekarang Sebelum</h5>
      <div class="flex gap-3 justify-center">
        <h5 class="font-extrabold font-mono text-3xl text-black">{{ days }} Hari</h5>
        <h5 class="font-extrabold font-mono text-3xl text-black">:</h5>
        <h5 class="font-extrabold font-mono text-3xl text-black">{{ hours }}</h5>
        <h5 class="font-extrabold font-mono text-3xl text-black">:</h5>
        <h5 class="font-extrabold font-mono text-3xl text-black">{{ minutes }}</h5>
        <h5 class="font-extrabold font-mono text-3xl text-black">:</h5>
        <h5 class="font-extrabold font-mono text-3xl text-black">{{ seconds }}</h5>
      </div>
    </div>
    <div class="flex gap-[3rem] flex-wrap justify-center">
        <a href="https://bit.ly/Form-Pendaftaran-Difest2024" class="inline-flex items-center font-mono text-white bg-hijau-difest rounded-md p-3" target="_blank">
            Daftar Sekarang
            <IconOutbound class="pl-1" />
        </a>
        <button
        @click="downloadPDF()" target="_blank"
        class="inline-flex items-center font-mono text-white bg-hijau-difest rounded-md p-3">
            Download Booklet
            <IconDownload class="pl-1" />
        </button>
      </div>
  </section>
</template>