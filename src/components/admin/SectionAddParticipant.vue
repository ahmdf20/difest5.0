<script setup>
import router from '@/router';
import axios from 'axios'
import Swal from 'sweetalert2'
import { onMounted, ref } from 'vue'

const competitons = ref([])
const formData = ref({
  userid: '',
  name: '',
  password: '',
  phone: '',
  email: '',
  group: 'Pilih',
  role: 'participant'
})

const handleSubmit = async() => {
  // const newFormData = new FormData()
  const random = new Date().getTime()
  const newRandomUUID = 'PRTCPN'+random.toString().substring(7, 11)
  const newData = {
    userid: newRandomUUID,
    password: newRandomUUID,
    name: formData.value.name,
    phone: formData.value.phone,
    email: formData.value.email,
    group: formData.value.group,
    role: formData.value.role
  }
  try {
    const response = await axios.post(`http://localhost:3030/api/participant/insert`, newData)
    // console.log(response)
    if (response.status == 201) {
      Swal.fire({
        title: 'Berhasil',
        icon: 'success',
        text: 'Berhasil membuat data participant'
      })
      router.push('/admin/participant-manage')
    } else {

    }
  } catch (error) {
    console.error(error)
  }
}

const getAllCompetition = async () => {
  const response = await axios.get(`http://localhost:3030/api/competitions`)
  // console.log(response)
  if (response.status == 200) {
    competitons.value = response.data
  }
}

onMounted(() => {
  getAllCompetition()
})

</script>

<template>
  <div class="card w-2/4 bg-kuning-difest shadow-xl">
    <div class="card-body">
      <h2 class="card-title text-neutral">
        Form Tambah Participant
        <!-- <div class="badge badge-secondary">NEW</div> -->
      </h2>
      <form @submit.prevent="handleSubmit">
        <div class="mb-5">
          <label for="name" class="mb-3 text-neutral">Nama</label>
          <input type="text" class="file-input w-full text-neutral bg-neutral-100" placeholder="Nama Lengkap" v-model="formData.name" />
        </div>
        <div class="mb-5">
          <label for="phone" class="mb-3 text-neutral">No Telp</label>
          <input type="text" class="file-input w-full text-neutral bg-neutral-100" placeholder="No Telp" v-model="formData.phone" />
        </div>
        <div class="mb-5">
          <label for="desc_karya" class="mb-3 text-neutral">Email</label>
          <input type="text" class="file-input w-full text-neutral bg-neutral-100" placeholder="example@example.com" v-model="formData.email" />
        </div>
        <div class="mb-5">
          <label for="desc_karya" class="mb-3 text-neutral">Dari Perlombaan</label>
          <select class="select select-bordered w-full bg-neutral-100 text-neutral" v-model="formData.group">
            <option value="Pilih">-- Pilih --</option>
            <option v-for="(c, index) in competitons" :key="index" :value="c.comp_name">{{ c.comp_name }}</option>
          </select>
          <small class="text-error">* Pilih Perlombaan yang dipilih peserta</small>
        </div>
        <button class="btn btn-wide float-end bg-hijau-difest text-neutral-100 border-none" type="submit">Submit</button>
      </form>
    </div>
  </div>
</template>