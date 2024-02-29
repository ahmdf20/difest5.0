<template>
  <div class="card w-3/5 bg-kuning-difest shadow-xl">
    <div class="card-body">
      <h2 class="card-title text-neutral">
        Form Pengumpulan Karya
        <!-- <div class="badge badge-secondary">NEW</div> -->
      </h2>
      <form>
        <div class="mb-5">
          <label for="surat_orsinil" class="mb-3 text-neutral">Upload Surat Orisinil</label>
          <input type="file" class="file-input w-full text-neutral" />
        </div>
        <div class="mb-5">
          <label for="desc_karya" class="mb-3 text-neutral">Upload Deskripsi Karya</label>
          <input type="file" class="file-input w-full text-neutral" />
        </div>
        <div class="mb-5">
          <label for="desc_karya" class="mb-3 text-neutral">Upload Karya</label>
          <input type="file" class="file-input w-full text-neutral" />
        </div>
        <button class="btn btn-wide float-end bg-hijau-difest text-neutral-100 border-none" @click="handleSubmit">Submit</button>
      </form>
    </div>
  </div>
</template>

<script setup>
import Swal from 'sweetalert2'

const handleSubmit = (event) => {
  event.preventDefault()
  Swal.fire({
    title: 'Berhasil Upload Karya',
    icon: 'success',
    text: 'Terimakasih telah mengikuti Lomba DIFEST 5.0!\n\nharap tunggu informasi lebih lanjut untuk kedepannya!'
  })
}

</script>