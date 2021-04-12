<template>
  <div class="bg-gray-300 w-screen min-h-screen">
    <div class="w-full" v-if="info != null" >
      <div class="flex justify-center">
        <div>
          <h1 class="font-bold text-2xl text-center mt-4">Info Gempa Terkini</h1> 
          <div class="my-5">
            <p><span class="font-bold">Tanggal : </span>{{info.Infogempa.gempa.Tanggal._text}}</p>
            <p><span class="font-bold">Jam : </span>{{info.Infogempa.gempa.Jam._text}}</p>
            <p><span class="font-bold">Magnitude : </span>{{info.Infogempa.gempa.Magnitude._text}}</p>
            <p><span class="font-bold">Kedalaman : </span>{{info.Infogempa.gempa.Kedalaman._text}}</p>
            <p><span class="font-bold">Kordinat : </span>{{info.Infogempa.gempa.point.coordinates._text}}</p>
            <p><span class="font-bold">Lintang : </span>{{info.Infogempa.gempa.Lintang._text}}</p>
            <p><span class="font-bold">Bujur : </span>{{info.Infogempa.gempa.Bujur._text}}</p>
            <p><span class="font-bold">Wilayah : </span>{{info.Infogempa.gempa.Wilayah._text}}</p>
            <p><span class="font-bold">Potensi : </span>{{info.Infogempa.gempa.Potensi._text}}</p>
            <p><span class="font-bold">Dirasakan : </span>{{info.Infogempa.gempa.Dirasakan._text}}</p>
          </div>
          <!-- <img :src="`https://data.bmkg.go.id/DataMKG/TEWS/${info.Infogempa.gempa.Shakemap._text}`" alt="" srcset=""> -->
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
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import xmljs from 'xml-js'
export default {
  name: "index",
  data(){
    return{
      info:null,
      items:[],
      // items: [
      //   'https://www.gotravelly.com/blog/wp-content/uploads/2019/10/Gunung-Fuji-Jepang-1024x640.jpg',
      //   'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/nature-quotes-1557340276.jpg?crop=0.666xw:1.00xh;0.168xw,0&resize=640:*',
      // ],
      index: null
    }
  },
  async mounted(){
      var data = await (await axios.get("https://data.bmkg.go.id/DataMKG/TEWS/autogempa.xml")).data
      this.info = JSON.parse(xmljs.xml2json(data,{compact:true,spaces:2}))
      this.items.push(`https://data.bmkg.go.id/DataMKG/TEWS/${this.info.Infogempa.gempa.Shakemap._text}`)
  }
}
</script>

<style scoped>
.images-wrapper {
  display: flex;
  justify-content:center;  
}

.images-wrapper .image {
  min-width: 600px;
  min-height: 720px;
  background-size: auto;
}

.images-wrapper-divs {
  margin-bottom: 40px;
}

.images-wrapper-img img {
  object-fit: cover;
}
</style>