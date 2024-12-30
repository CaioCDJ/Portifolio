<script setup>
import Button from "primevue/button";
import Hero from "./components/sections/Hero.vue";
import About from "./components/sections/About.vue";
import Projects from './components/sections/Projects.vue'
</script>

<template>
  <!-- TODO:
    - Navbar
    - Hero
    - About me
    - Stack / db / langs / tools
    - Timeline  work/formation
    - Projects
    - Contats 
  -->

  <main class="flex flex-col w-full center gap-8 bg-slate-900 text-white">
    <Hero />
    <About />
    <Projects />
  </main>
</template>



