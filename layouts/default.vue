<template>
  <div>
    <div class="block md:hidden w-full px-5 py-4 bg-gray-800 text-white text-center font-medium text-xl">
      Info Gempa Terkini
    </div>
    <div class="hidden md:flex justify-between px-5 py-4 bg-gray-800 items-center text-white">
      <span class="font-medium text-xl">Info Gempa Terkini</span>
      <div class="w-1/2 flex justify-around">
        <NuxtLink class="px-4 py-2" to="/" active-class="active" exact>Home</NuxtLink>
        <NuxtLink class="px-4 py-2" to="/data" active-class="active">Data gempa</NuxtLink>
        <NuxtLink class="px-4 py-2" to="/about" active-class="active" exact>About</NuxtLink>
      </div>
    </div>
    <div class="fixed bottom-0 md:hidden w-full">
      <div class="justify-between w-full px-5 py-4 bg-gray-800 items-center text-white">
        <div class="flex justify-between">
          <NuxtLink class="px-4 py-2 text-center" to="/" active-class="active" exact>
            <svg xmlns="http://www.w3.org/2000/svg" class="mx-auto" height="25" width="25" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
            <span>Home</span>
          </NuxtLink>
          <NuxtLink class="px-4 py-2 text-center" to="/data" active-class="active">
            <svg xmlns="http://www.w3.org/2000/svg" class="mx-auto" height="25" width="25" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
            </svg>
            <span>Data</span>
          </NuxtLink>
          <NuxtLink class="px-4 py-2 text-center" to="/about" active-class="active" exact>
            <svg xmlns="http://www.w3.org/2000/svg" class="mx-auto" height="25" width="25" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>About</span>
          </NuxtLink>
        </div>
      </div>
    </div>
    <Nuxt />
    <a href="https://saweria.co/raflidev" target="_blank" class="hidden md:block fixed right-5 bottom-36 md:bottom-5 rounded bg-yellow-400 px-5 py-2">
   
        <p>Belikan saya kopi ☕</p>
        Via <span class="font-bold">Saweria 😄</span>
    </a>
    <a href="https://saweria.co/raflidev" target="_blank" class="text-center fixed bottom-28 right-5 md:hidden rounded-full bg-yellow-400 hover:bg-yellow-600 p-4">
       <img src="https://i0.wp.com/orangkamar.com/wp-content/uploads/2020/11/Logo-Saweria-Donasi.png?fit=190%2C190&ssl=1" width="40" alt="" srcset="">
    </a>
  </div>
</template>

<style>
.active{
  @apply bg-gray-700 rounded;
}
</style>
