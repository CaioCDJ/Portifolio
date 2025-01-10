<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <div class="flex min-h-screen items-center flex-col w-full gap-8 text-white backdrop-blur bg-gray-700/10">
    <div class="overflow-x-hidden w-full flex flex-col center" v-auto-animate>
      <header class="w-full top-0 z-20 bacdrop-blur-xl">
        <nav class="w-full p-2 flex flex-row justify-between items-center px-4">
          <div>
            <RouterLink to="/">Portifolio</RouterLink>
          </div>
          <div class="flex flex-row gap-4">
            <RouterLink to="/experiences">Experiences</RouterLink>
            <RouterLink to="/projects">Projects</RouterLink>
          </div>
        </nav>
      </header>
    </div>
    <RouterView />
    <footer class="w-full flex center">
      <span>Desenvolvido por <a>ele</a> </span>
    </footer>
  </div>
</template>
