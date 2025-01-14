<script setup>
import { RouterLink, RouterView } from "vue-router";
import ScrollPanel from "primevue/scrollpanel";
</script>

<template>
  <ScrollPanel style="height: 100vh; width: 100%">
    <div
      class="flex items-center flex-col w-full gap-8 text-white backdrop-blur-xl bg-gray-900/30"
    >
      <div class="overflow-x-hidden w-full flex flex-col center" v-auto-animate>
        <header class="w-full top-0 z-20 bacdrop-blur-xl">
          <nav
            class="w-full p-2 flex flex-row justify-between items-center px-4"
          >
            <div>
              <RouterLink to="/">Portifolio</RouterLink>
            </div>
            <div class="flex flex-row gap-4">
              <RouterLink to="/Formation">Formation</RouterLink>
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
  </ScrollPanel>
</template>
