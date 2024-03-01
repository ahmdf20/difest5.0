<script setup>
import { onMounted, ref } from 'vue'
import axios from 'axios';

const competition = ref([])
const formData = ref({
  comp_id: '',
  group_name: '',
  follow_ig_hima: null,
  follow_ig_difest: null,
  subscribe_yt: null,
  bukti_pembayaran: null,
  follow_tiktok: null
})

const fileInputs = ref([
  {
    name: 'follow_ig_hima',
    label: 'Upload bukti follow IG HIMATIKOM'
  },
  {
    name: 'follow_ig_difest',
    label: 'Upload bukti follow IG DIFEST'
  },
  {
    name: 'subscribe_yt',
    label: 'Upload bukti Subscribe YouTube'
  },
  {
    name: 'bukti_pembayaran',
    label: 'Upload bukti Pembayaran'
  },
  {
    name: 'follow_tiktok',
    label: 'Upload bukti follow Tiktok'
  }
])

const getDataCompetition = async() => {
  const getCompe = await axios.get(`https://server-difest5-0.himatikom-polsub.com/api/competitions`)
  competition.value = getCompe.data
}

const handleHima = (event) => {
  const file = event.target.files[0]
  formData.value.follow_ig_hima = file
}

const handleDifest = (event) => {
  const file = event.target.files[0]
  formData.value.follow_ig_difest = file
}

const handleSubscribe = (event) => {
  const file = event.target.files[0]
  formData.value.subscribe_yt = file
}

const handleBuktiPembayaran = (event) => {
  const file = event.target.files[0]
  formData.value.bukti_pembayaran = file
}

const handleTiktok = (event) => {
  const file = event.target.files[0]
  formData.value.follow_tiktok = file
}

// const handleFileChange = (event) => {
//   const file = event.target.files[0]
//   formData.value.file = event.target.files[0];
// };

const handleFileChange = (name, event) => {
  const file = event.target.files[0]
  formData.value.name = file
}

const onSubmit = async () => {
  const theData = new FormData()
  theData.append('comp_id', formData.value.comp_id)
  theData.append('group_name', formData.value.group_name)
  theData.append('follow_ig_difest', formData.value.follow_ig_difest)
  theData.append('follow_ig_hima', formData.value.follow_ig_hima)
  theData.append('subscribe_yt', formData.value.subscribe_yt)
  theData.append('bukti_pembayaran', formData.value.bukti_pembayaran)
  theData.append('follow_tiktok', formData.value.follow_tiktok)
  // console.log(theData.entries())
  // const theData = {
  //   comp_id: formData.value.comp_id,
  //   group_name: formData.value.group_name,
  //   follow_ig_difest: formData.value.follow_ig_difest,
  //   follow_ig_hima: formData.value.follow_ig_hima,
  //   subscribe_yt: formData.value.subscribe_yt,
  //   bukti_pembayaran: formData.value.bukti_pembayaran,
  //   follow_tiktok: formData.value.follow_tiktok
  // }

  // try {
    // const response = await axios.post(`https://server-difest5-0.himatikom-polsub.com/api/competition/submit`, theData, {
    //   headers: {
    //     'Content-Type': 'multipart/form-data',
    //   },
    // })

    // if (response.status == 200) {

    // }
    // console.log(response)
  // } catch (error) {
  //   console.error('Gagal menyimpan data', error);
  // }
};

onMounted(() => {
  getDataCompetition()
})

</script>

<template>
  <section class="flex flex-wrap bg-kuning-difest justify-center p-3 py-[5rem]">
    <div class="card grid gap-3 bg-neutral-900 p-[1rem]">
      <form enctype="multipart/form-data" @submit.prevent="onSubmit">
        <div class="mb-5">
          <label for="comp_id">Lomba yang dipilih</label>
          <select class="select select-bordered w-full" name="comp_id" id="comp_id" v-model="formData.comp_id">
            <option v-for="comp in competition" :key="comp.id" :value="comp.id">{{ comp.comp_name }}</option>
          </select>
        </div>
        <div class="mb-5">
          <label for="group_name">Nama Kelompok</label>
          <input type="text" v-model="formData.group_name" placeholder="Type here" id="group_name" name="group_name" class="input input-bordered w-full" />
        </div>
        <div class="mb-5" v-for="(f, index) in fileInputs" :key="index">
          <label :for="f.name">{{ f.label }}</label>
          <input type="file" :id="f.name" class="file-input file-input-bordered w-full" @change="handleFileChange(f.name)" />
        </div>
        <!-- <div class="mb-5">
          <label for="follow_ig_difest">Upload bukti follow IG DIFEST</label>
          <input type="file" id="follow_ig_difest" class="file-input file-input-bordered w-full" @change="handleDifest" />
        </div>
        <div class="mb-5">
          <label for="subscribe_yt">Upload bukti Subscribe YouTube</label>
          <input type="file" id="subscribe_yt" class="file-input file-input-bordered w-full" @change="handleSubscribe" />
        </div>
        <div class="mb-5">
          <label for="bukti_pembayaran">Upload bukti Pembayaran</label>
          <input type="file" id="bukti_pembayaran" class="file-input file-input-bordered w-full" @change="handleBuktiPembayaran" />
        </div>
        <div class="mb-5">
          <label for="follow_tiktok">Upload bukti follow TikTok</label>
          <input type="file" id="follow_tiktok" class="file-input file-input-bordered w-full" @change="handleTiktok" />
        </div> -->
        <button class="btn btn-block bg-success mb-3 text-neutral-950 hover:text-neutral-100">Next</button>
      </form>
    </div>
  </section>
</template>