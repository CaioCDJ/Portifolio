<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <div class="flex flex-col w-full center gap-8 text-white">
    <nav class="w-full p-2 flex flex-row justify-between items-center px-4">
      <div>
        <RouterLink to="/">Portifolio</RouterLink>
      </div>
      <RouterLink to="/projects">Projects</RouterLink>
    </nav>

    <RouterView />
  </div>
</template>
