<script setup>
  import { onMounted, ref, nextTick, onBeforeMount } from 'vue'
  // import DataTable from 'datatables.net-dt'
  // import 'datatables.net-dt/css/dataTables.dataTables.css'
  import axios from 'axios'

  const submission = ref([])
  const currentPage = ref(1)
  const itemsPerPage = ref(10)
  const totalItems = ref(0)

  const getAllParticipant = async() => {
      const response = await axios.get(
      `https://server-difest5-0.himatikom-polsub.com/api/submissions?page=${currentPage.value}&limit=${itemsPerPage.value}`
    );
    if (response.status == 201) {
      submission.value = response.data.data;
      totalItems.value = response.data.total;
    }
  }
  
  onMounted(() => {
    getAllParticipant()
    // getPaginationNumbers()
  })

  const handlePageChange = (page) => {
    currentPage.value = page
    getAllParticipant()
  };

  const getPaginationNumbers = () => {
    const totalPages = parseInt(Math.ceil(totalItems.value / itemsPerPage.value))
    const pageNumbers = []
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(i)
    }
    // console.log(pageNumbers)
    return pageNumbers
  }

  const handleDownload = async(author, path) => {
    const url = `https://server-difest5-0.himatikom-polsub.com/submissions/${path}`
    // Request pada server
    const response = await axios.get(url, {
      responseType: 'blob'
    })

    if (response.status == 200) {
      const blob = response.data
      const downloadLink = document.createElement('a')
      downloadLink.href = window.URL.createObjectURL(blob)
      downloadLink.download = author.toUpperCase()+path
      downloadLink.click()
      window.URL.revokeObjectURL(downloadLink.href)
    } else {
      console.error(`Error downloading file: ${response.statusText}`)
    }
  }
</script>
<template>
  <div class="container p-1 flex justify-center">
    <div class="card max-w-5xl card-compact bg-kuning-difest shadow-xl p-[2rem] text-neutral">
      <h1 class="font-extrabold text-2xl text-center mb-[2rem]">Participant Submission</h1>
      <div class="overflow-auto max-h-[50dvh]">
        <table class="table text-neutral" id="participant_table">
          <!-- head -->
          <thead class="text-neutral">
            <tr>
              <th>#</th>
              <th>Participant</th>
              <th>Surat Orsinil</th>
              <th>Karya</th>
              <th>Deksipsi Karya</th>
            </tr>
          </thead>
          <tbody>
              <tr v-for="(s, index) in submission" :key="index">
                <th>{{ index+1}}</th>
                <td>{{ s.name }}</td>
                <td>
                  <button @click="handleDownload(s.name, s.orsinil)" target="_blank" class="btn bg-success text-neutral-100">
                      Surat Orsinil
                  </button>
                </td>
                <td>
                  <button @click="handleDownload(s.name, s.karya)" target="_blank" class="btn bg-success text-neutral-100">
                      Karya 
                  </button>
                </td>
                <td>
                  <button @click="handleDownload(s.name, s.karya_desc)" target="_blank" class="btn bg-success text-neutral-100">
                      Deskripsi Karya
                  </button>
                </td>
              </tr>
          </tbody>
        </table>
        <div class="flex justify-end mt-4 pr-[3rem]">
          <ul class="flex items-center gap-1">
            <li v-for="pageNumber in getPaginationNumbers()" :key="pageNumber">
              <button
                class="px-4 py-2 text-sm font-medium rounded-md border bg-neutral-100"
                :class="{ 'bg-success': currentPage.value === pageNumber }"
                @click="handlePageChange(pageNumber)"
              >
                {{ pageNumber }}
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>  
    </div>
</template>