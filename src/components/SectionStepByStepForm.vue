<script setup>
import { onMounted, ref } from 'vue'
import axios from 'axios';

const competition = ref([])
const formData = ref({
  comp_id: 0,
  group_name: '',
  follow_ig_hima: null,
  follow_ig_difest: null,
  subscribe_yt: null,
  bukti_pembayaran: null,
  follow_tiktok: null
})

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

const currentStep = ref(1);

const previousStep = () => {
  currentStep.value--;
};

const nextStep = () => {
  currentStep.value++;
};

const handleEndSubmit = () => {
  // Handle form submission for the final step
};

const onSubmit1 = async () => {
  const theData = new FormData()
  theData.append('comp_id', formData.value.comp_id)
  theData.append('group_name', formData.value.group_name)
  theData.append('follow_ig_difest', formData.value.follow_ig_difest)
  theData.append('follow_ig_hima', formData.value.follow_ig_hima)
  theData.append('subscribe_yt', formData.value.subscribe_yt)
  theData.append('bukti_pembayaran', formData.value.bukti_pembayaran)
  theData.append('follow_tiktok', formData.value.follow_tiktok)
  // console.log(theData.entries())

  try {
    const response = await axios.post(`https://server-difest5-0.himatikom-polsub.com/api/competition/submit`, theData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })

    if (response.status == 200) {
      currentStep.value++;
      // const { token, user } = response.data
      // await $redis.set('token', token)
      // $cookies.set('user', user)
    }
    console.log(response)
  } catch (error) {
    console.error('Gagal menyimpan data', error);
  }
};

onMounted(() => {
  getDataCompetition()
})
</script>


<template>
  <section class="flex flex-wrap justify-center p-3 py-[5rem]">
    <div class="">
      <div class="flex justify-center mb-5 steps">
        <div :class="[currentStep === 1 ? 'step-active' : 'step']">Step 1</div>
        <div :class="[currentStep === 2 ? 'step-active' : 'step']">Step 2</div>
        <div :class="[currentStep === 3 ? 'step-active' : 'step']">Step 3</div>
      </div>
  
      <form @submit.prevent="handleSubmit">
        <div class="py-[5rem]" v-if="currentStep === 1"> 
          <div class="flex flex-wrap gap-2">
            <div class="card grid gap-3 bg-neutral-900 p-[1rem]">
              <form enctype="multipart/form-data" @submit.prevent="onSubmit1">
                <div class="mb-5">
                  <label for="comp_id">Lomba yang dipilih <span class="text-error">*</span></label>
                  <select class="select select-bordered w-full" name="comp_id" id="comp_id" v-model="formData.comp_id">
                    <option value="0">-- Pilih --</option>
                    <option v-for="comp in competition" :key="comp.id" :value="comp.id">{{ comp.comp_name }}</option>
                  </select>
                </div>
                <div class="mb-5">
                  <label for="group_name">Nama Kelompok <span class="text-error">*</span></label>
                  <input type="text" v-model="formData.group_name" placeholder="Type here" id="group_name" name="group_name" class="input input-bordered w-full" required />
                </div>
                <div class="mb-5">
                  <label for="follow_ig_hima">Upload bukti follow IG HIMATIKOM <span class="text-error">*</span></label>
                  <input type="file" id="follow_ig_hima" class="file-input file-input-bordered w-full" @change="handleHima" />
                </div>
                <div class="mb-5">
                  <label for="follow_ig_difest">Upload bukti follow IG DIFEST <span class="text-error">*</span></label>
                  <input type="file" id="follow_ig_difest" class="file-input file-input-bordered w-full" @change="handleDifest" />
                </div>
                <div class="mb-5">
                  <label for="subscribe_yt">Upload bukti Subscribe YouTube <span class="text-error">*</span></label>
                  <input type="file" id="subscribe_yt" class="file-input file-input-bordered w-full" @change="handleSubscribe" />
                </div>
                <div class="mb-5">
                  <label for="bukti_pembayaran">Upload bukti Pembayaran <span class="text-error">*</span></label>
                  <input type="file" id="bukti_pembayaran" class="file-input file-input-bordered w-full" @change="handleBuktiPembayaran" />
                </div>
                <div class="mb-5">
                  <label for="follow_tiktok">Upload bukti follow TikTok <span class="text-error">*</span></label>
                  <input type="file" id="follow_tiktok" class="file-input file-input-bordered w-full" @change="handleTiktok" />
                </div>
                <button class="btn btn-block bg-success mb-3 text-neutral-950 hover:text-neutral-100">Next</button>
              </form>
            </div>
            <div class="card bg-neutral-900 p-[1rem]">
              <div class="overflow-x-auto">
                <h3 class="mb-3">List Anggota Kelompok : Bla bla bla</h3>
                <table class="table mb-[2rem]">
                  <!-- head -->
                  <thead>
                    <tr>
                      <th></th>
                      <th>Name</th>
                      <th>Job</th>
                      <th>Favorite Color</th>
                    </tr>
                  </thead>
                  <tbody>
                    <!-- row 1 -->
                    <tr>
                      <th>1</th>
                      <td>Cy Ganderton</td>
                      <td>Quality Control Specialist</td>
                      <td>Blue</td>
                    </tr>
                    <!-- row 2 -->
                    <tr>
                      <th>2</th>
                      <td>Hart Hagerty</td>
                      <td>Desktop Support Technician</td>
                      <td>Purple</td>
                    </tr>
                    <!-- row 3 -->
                    <tr>
                      <th>3</th>
                      <td>Brice Swyre</td>
                      <td>Tax Accountant</td>
                      <td>Red</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <button class="btn btn-success">Next</button>
            </div>
          </div>
        </div>
        <div class="bg-light-mode-difest py-[5rem]" v-else-if="currentStep === 2">
          <div class="card grid gap-3 bg-neutral-900 p-[1rem]">
            <form enctype="multipart/form-data" @submit.prevent="onSubmit1">
              <div class="mb-5">
                <label for="comp_id">Lomba yang dipilih <span class="text-error">*</span></label>
                <select class="select select-bordered w-full" name="comp_id" id="comp_id" v-model="formData.comp_id">
                  <option value="0">-- Pilih --</option>
                  <option v-for="comp in competition" :key="comp.id" :value="comp.id">{{ comp.comp_name }}</option>
                </select>
              </div>
              <div class="mb-5">
                <label for="group_name">Nama Kelompok <span class="text-error">*</span></label>
                <input type="text" v-model="formData.group_name" placeholder="Type here" id="group_name" name="group_name" class="input input-bordered w-full" required />
              </div>
              <div class="mb-5">
                <label for="follow_ig_hima">Upload bukti follow IG HIMATIKOM <span class="text-error">*</span></label>
                <input type="file" id="follow_ig_hima" class="file-input file-input-bordered w-full" @change="handleHima" />
              </div>
              <div class="mb-5">
                <label for="follow_ig_difest">Upload bukti follow IG DIFEST <span class="text-error">*</span></label>
                <input type="file" id="follow_ig_difest" class="file-input file-input-bordered w-full" @change="handleDifest" />
              </div>
              <div class="mb-5">
                <label for="subscribe_yt">Upload bukti Subscribe YouTube <span class="text-error">*</span></label>
                <input type="file" id="subscribe_yt" class="file-input file-input-bordered w-full" @change="handleSubscribe" />
              </div>
              <div class="mb-5">
                <label for="bukti_pembayaran">Upload bukti Pembayaran <span class="text-error">*</span></label>
                <input type="file" id="bukti_pembayaran" class="file-input file-input-bordered w-full" @change="handleBuktiPembayaran" />
              </div>
              <div class="mb-5">
                <label for="follow_tiktok">Upload bukti follow TikTok <span class="text-error">*</span></label>
                <input type="file" id="follow_tiktok" class="file-input file-input-bordered w-full" @change="handleTiktok" />
              </div>
              <button class="btn btn-block bg-success mb-3 text-neutral-950 hover:text-neutral-100">Next</button>
            </form>
          </div>
        </div>
        <div class="bg-light-mode-difest py-[5rem]" v-else-if="currentStep === 3">
          </div>  
      </form>
    </div>
  </section>
</template>