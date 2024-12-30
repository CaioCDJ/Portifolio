<script setup>
import { ref, onMounted } from "vue";
import CardPorject from "../ui/ProjectCard.vue";

const images = ref([
  "https://github.com/CaioCDJ/CardCreator/raw/main/ui.png",
  "https://images.unsplash.com/photo-1491250974528-9443b2902f18?ixid=M3wxMTI1OHwwfDF8cmFuZG9tfHx8fHx8fHx8MTczNTU3NDM5MXw&ixlib=rb-4.0.3&q=85&w=1920",
  "https://images.unsplash.com/photo-1526715058896-23f69a067d99?ixid=M3wxMTI1OHwwfDF8cmFuZG9tfHx8fHx8fHx8MTczNTU3NDM5MXw&ixlib=rb-4.0.3&q=85&w=1920",
]);

</script>

<template>
  <section class="flex flex-col max-w-[1400px] gap-24 center px-8">
    <div class="w-full flex flex-col gap-2 center">
      <h2 class="text-4xl text-cyan-300 font-semibold">Projetos</h2>
      <hr class="border-slate-700 border-2 w-3/5" />
    </div>
    <CardPorject :images="images" name="Card Maker" :odd="false" />
    <CardPorject :images="images" name="Card Maker" :odd="true" />
  </section>
</template>
