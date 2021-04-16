<template>
  <div>
    <div class="flex justify-between px-5 py-4 bg-gray-800 items-center text-white">
      <span class="font-medium text-xl">Info Gempa Terkini</span>
      <div class="w-1/2 flex justify-around">
        <NuxtLink class="px-4 py-2" to="/" active-class="active" exact>Home</NuxtLink>
        <NuxtLink class="px-4 py-2" to="/data" active-class="active" exact>Data gempa</NuxtLink>
        <NuxtLink class="px-4 py-2" to="/grafik" active-class="active" exact>Grafik data gempa</NuxtLink>
        <NuxtLink class="px-4 py-2" to="/about" active-class="active" exact>About</NuxtLink>
      </div>
    </div>
    <Nuxt />
  </div>
</template>

<style>
.active{
  @apply bg-gray-700 rounded;
}
</style>
