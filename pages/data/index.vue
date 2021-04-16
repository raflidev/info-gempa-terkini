<template>
  <div class="bg-gray-300 min-h-screen">
    
    <div >
      <div class="text-center py-5">
        <h1 class="font-medium text-2xl">Data gempa tekini</h1>
        <p class="font-medium text-xs">Data diambil 10 menit sekali (waktu ambil data adalah waktu server.)</p>
      </div>
      <table class="rounded-t-lg w-5/6 mx-auto bg-gray-200 text-gray-800">
        <thead>
          <tr class="text-left border-b-2 border-gray-300">
            <th class="px-4 py-3">No</th>
            <th class="px-4 py-3">Ambil data</th>
            <th class="px-4 py-3">Jam Kejadian</th>
            <th class="px-4 py-3">Wilayah</th>
            <th class="px-4 py-3">Koordinat</th>
            <th class="px-4 py-3">Peta</th>
            <th class="px-4 py-3">Aksi</th>
          </tr>
        </thead>
        <tbody  v-if="data_gempa != null">
          <tr class="bg-gray-100 border-b border-gray-200" v-for="(data,count) in data_gempa" :key="data.index">
            <td class="px-4 py-3">{{count+1}}</td>
            <td class="px-4 py-3">{{data.ambil_data}}</td>
            <td class="px-4 py-3">{{data.jam}}</td>
            <td class="px-4 py-3">{{data.detail.wilayah}}</td>
            <td class="px-4 py-3">{{data.detail.koordinat}}</td>
            <td class="px-4 py-3">{{data.detail.lintang}} {{data.detail.bujur}}</td>
            <td class="px-4 py-3">
              <NuxtLink class="bg-green-400 rounded text-white px-3 py-2 hover:bg-green-600" :to="`/data/${count+1}`">Detail</NuxtLink>
            </td>
          </tr>
        </tbody>
      </table>
      
      <div v-if="data_gempa == null" class="flex flex-col justify-center items-center w-screen min-h-screen">
        <button type="button" class="bg-gray-100 flex p-2 rounded-md mb-5" disabled>
        <svg xmlns="http://www.w3.org/2000/svg" class="animate-spin mr-3 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
        Loading
        </button>
      </div>
    </div>  
  </div>
</template>

<script>
import axios from 'axios'
export default {
name: "data_gempa",
data(){
  return{
    data_gempa:null
  }
},
async mounted(){
  this.data_gempa = await (await axios.get("https://data-gempa-terkini.herokuapp.com/")).data
}
}
</script>

<style>

</style>