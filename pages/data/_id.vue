<template>
  <div class="bg-gray-300 min-h-screen pb-32">
    <div v-if="data_gempa == null" class="flex flex-col justify-center items-center min-h-screen">
      <button type="button" class="bg-gray-100 flex p-2 rounded-md mb-5" disabled>
        <svg xmlns="http://www.w3.org/2000/svg" class="animate-spin mr-3 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
        Loading
      </button>
    </div>

    <div v-if="data_gempa != null" class="flex-wrap lg:flex py-5 items-center justify-center space-x-10">
      <div>
        <iframe class="google-maps mx-auto"
          frameborder="0" style="border:0"
          :src="`https://www.google.com/maps/embed/v1/view?key=AIzaSyCBsWcQJiEmoNEY3XJZCTEfdxU-jkfyn4M&center=${data_gempa[this.$route.params.id - 1].detail.koordinat}&zoom=7&maptype=satellite`" allowfullscreen>
        </iframe>
      </div>
      <div>
        <CoolLightBox
          :items="items"
          :index="index"
          @close="index = null">
        </CoolLightBox>

        <div class="mx-auto -ml-8 images-wrapper">
          <div
            class="image mx-auto"
            v-for="(image, imageIndex) in items"
            :key="imageIndex"
            @click="index = imageIndex"
            :style="{ backgroundImage: 'url(' + image + ')' }"
          ></div>
        </div>
      </div>
    </div>


  </div>
</template>

<script>
import axios from 'axios'
export default {
name:"data_gempa_id",
data(){
  return{
    items:[],
    index: null,
    data_gempa: null
  }
},
async mounted(){
  this.data_gempa = await (await axios.get("https://data-gempa-terkini.onrender.com/")).data
  console.log(this.data_gempa);
  this.items.push(`https://data.bmkg.go.id/DataMKG/TEWS/${this.data_gempa[this.$route.params.id - 1].detail.map}`)
}
}
</script>


<style scoped>
.images-wrapper {
  display: flex;
}


@media only screen and (max-width: 600px) {
 .images-wrapper .image {
  min-width: 350px;
  min-height: 400px;
  background-size: cover;
  }
  .google-maps{
    min-width: 300px;
    min-height: 300px;
  }
}
@media only screen and (min-width: 600px) {
  .images-wrapper .image {
    min-width: 600px;
    min-height: 720px;
    background-size: auto;
  }

  .google-maps{
    min-width: 500px;
    min-height: 600px;
  }
}



.images-wrapper-divs {
  margin-bottom: 40px;
}

.images-wrapper-img img {
  object-fit: cover;
}
</style>
