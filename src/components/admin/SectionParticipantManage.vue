<script setup>
  import { onMounted, ref, nextTick, onBeforeMount } from 'vue'
  // import DataTable from 'datatables.net-dt'
  // import 'datatables.net-dt/css/dataTables.dataTables.css'
  import axios from 'axios'

  const participant = ref([])
  const currentPage = ref(1)
  const itemsPerPage = ref(10)
  const totalItems = ref(0)

  const getAllParticipant = async() => {
      const response = await axios.get(
      `http://localhost:3030/api/participant/all?page=${currentPage.value}&limit=${itemsPerPage.value}`
    );
    if (response.status == 201) {
      participant.value = response.data.data;
      totalItems.value = response.data.total;
    }
  }
  
  onMounted(() => {
    getAllParticipant()
  })

  const handlePageChange = (page) => {
    currentPage.value = page
    fetchItems()
  };

  const getPaginationNumbers = () => {
    const totalPages = Math.ceil(totalItems.value / itemsPerPage.value)
    const pageNumbers = []
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(i)
    }
    return pageNumbers
  }
</script>

<template>
  <div class="container p-1">
    <router-link :to="{ name: 'Add Participant' } " class="btn mb-[1rem] btn-success">Tambah Data</router-link>
    <div class="card card-compact bg-kuning-difest shadow-xl p-[2rem] text-neutral">
      <h1 class="font-extrabold text-2xl text-center mb-[2rem]">Participant Manage</h1>
      <div class="overflow-auto max-h-[50dvh]">
        <table class="table text-neutral" id="participant_table">
          <!-- head -->
          <thead class="text-neutral">
            <tr>
              <th>#</th>
              <th>Peserta ID</th>
              <th>Nama</th>
              <th>No Telp</th>
              <th>Email</th>
              <th>Dari Lomba</th>
            </tr>
          </thead>
          <tbody>
              <tr v-for="(p, index) in participant" :key="index">
                <th>{{ index+1 }}</th>
                <td>{{ p.userid }}</td>
                <td>{{ p.name }}</td>
                <td>{{ p.phone }}</td>
                <td>{{ p.email }}</td>
                <td>{{ p.group }}</td>
              </tr>
          </tbody>
        </table>
        <div class="flex justify-end mt-4">
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