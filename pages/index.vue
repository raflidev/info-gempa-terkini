<template>
  <div class="bg-gray-300 min-h-screen pb-32">
    <div v-if="info == null" class="flex flex-col justify-center items-center w-screen min-h-screen">
      <button type="button" class="bg-gray-100 flex p-2 rounded-md mb-5" disabled>
        <svg xmlns="http://www.w3.org/2000/svg" class="animate-spin mr-3 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
        Loading
      </button>
      <p class="italic">"{{ qoutes[Math.floor(Math.random() * 3)] }}"</p>
      <span class="text-xs">-Mang Udin</span>
    </div>
    <div class="container w-full" v-if="info != null">
      <div class="flex justify-center">
        <div>
          <h1 class="font-bold text-2xl text-center mt-4">Info Gempa Terkini</h1> 
          <div class="my-5 px-3">
            <div class="h-40 grid grid-cols-2">
              <div class="flex items-center space-x-3">
                <svg xmlns="http://www.w3.org/2000/svg" class="text-yellow-400 h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
                <div>
                  <p class="font-bold">Hari Kejadian</p>
                {{info.Infogempa.gempa.Tanggal._text}},{{info.Infogempa.gempa.Jam._text}}
                </div>
              </div>

              <div class="flex items-center space-x-3">
                <svg xmlns="http://www.w3.org/2000/svg" class="text-red-700 h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.636 18.364a9 9 0 010-12.728m12.728 0a9 9 0 010 12.728m-9.9-2.829a5 5 0 010-7.07m7.072 0a5 5 0 010 7.07M13 12a1 1 0 11-2 0 1 1 0 012 0z" />
                </svg>
                <div>
                  <p class="font-bold">Magnitude</p>
                  {{info.Infogempa.gempa.Magnitude._text}}
                </div>
              </div>

              <div class="flex items-center space-x-3">
                <svg xmlns="http://www.w3.org/2000/svg" class="text-blue-700 h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <div>
                  <p class="font-bold">Lokasi</p>
                  {{info.Infogempa.gempa.Lintang._text}} - {{info.Infogempa.gempa.Bujur._text}}
                </div>
              </div>

              <div class="flex items-center space-x-3">
                <svg xmlns="http://www.w3.org/2000/svg" class="text-green-400 h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <p class="font-bold">Kedalaman</p>
                  {{info.Infogempa.gempa.Kedalaman._text}}
                </div>
              </div>


            </div>
              <div class="flex items-center space-x-3 relative">
                <svg xmlns="http://www.w3.org/2000/svg" class="text-red-600 h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
                <div>
                  <p class="font-bold">{{info.Infogempa.gempa.Wilayah._text}}</p>
                </div>
              </div>
            
              <div class="flex items-center space-x-3">
                <svg xmlns="http://www.w3.org/2000/svg" class="text-purple-700 h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <p class="font-bold">Dirasakan : 
                    <span class="bg-red-600 text-white rounded mr-2 p-1" v-for="rasa in info.Infogempa.gempa.Dirasakan._text.split(',')" :key="rasa.index">
                      {{rasa}}
                    </span>
                  </p>
                </div>
              </div>
            
          </div>
          <CoolLightBox 
            :items="items" 
            :index="index"
            @close="index = null">
          </CoolLightBox>

          <div class="images-wrapper">
            <div
              class="image"
              v-for="(image, imageIndex) in items"
              :key="imageIndex"
              @click="index = imageIndex"
              :style="{ backgroundImage: 'url(' + image + ')' }"
            ></div>
          </div>

          <p class="font-medium italic py-4 text-center">Data diambil dari lembaga BMKG (Badan Meteorologi, Klimatologi, dan Geofisika)</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: "index",
  data(){
    return{
      info:null,
      items:[],
      index: null,
      qoutes:['nungguin ya??','yuk bisa yuk','kuliah ceriya-ceriya 😄','deadline besok :(']
    }
  },
  async mounted(){
      this.info = await (await axios.get("https://data-gempa-terkini.herokuapp.com/autogempa")).data
      // this.info = JSON.parse(xmljs.xml2json(data,{compact:true,spaces:2}))
      this.items.push(`https://data.bmkg.go.id/DataMKG/TEWS/${this.info.Infogempa.gempa.Shakemap._text}`)
  },
}
</script>

<style scoped>
.images-wrapper {
  display: flex;
  justify-content:center;  
}


@media only screen and (max-width: 600px) {
 .images-wrapper .image {
  min-width: 300px;
  min-height: 300px;
  background-size: cover;
  }
}
@media only screen and (min-width: 600px) {
 
.images-wrapper .image {
  min-width: 600px;
  min-height: 720px;
  background-size: auto;
}
}



.images-wrapper-divs {
  margin-bottom: 40px;
}

.images-wrapper-img img {
  object-fit: cover;
}
</style>