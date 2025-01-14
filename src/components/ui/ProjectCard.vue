<template>
  <div
    class="bg-[#050032]/80 border border-2 border-sky-500/30 backdrop-blur-xl hover:shadow hover:shadow-md grid grid-cols-1 md:grid-cols-2 rounded-lg h-auto md:h-[250px]"
  >
    <div class="flex">
      <div class="card">
        <Galleria
          :value="imgs"
          :responsiveOptions="responsiveOptions"
          :numVisible="5"
          :circular="true"
          containerStyle="max-width: 100%;height:100%; max-height:250px; border:none"
          :showItemNavigators="true"
          :showThumbnails="false"
        >
          <template #item="slotProps">
            <img
              :src="slotProps.item"
              :alt="slotProps.item"
              style="width: 100%; display: block"
            />
          </template>
          <template #thumbnail="slotProps">
            <img
              :src="slotProps.item"
              :alt="slotProps.item"
              style="display: block"
            />
          </template>
        </Galleria>
      </div>
    </div>

    <div class="flex flex-col p-2 px-4 gap-2 center">
      <div clas="flex flex-col gap-4">
        <div class="flex justify-between w-full">
          <h5 class="text-xl text-sky-500 font-semibold">
            {{ title }}
          </h5>
          <Tag
            v-if="!is_done"
            class="!text-[10px] text-emerald-200 !bg-green-500/25 !px-2 !py-0"
            severity="success"
            value="Doing"
          />
        </div>
        <div class="text-justify indent-2 text-sm">
          {{ desc }}
        </div>
        <div class="flex flex-row flex-wrap mt-2 gap-2">
          <Icon v-for="icon in stack" :name="icon" />
        </div>
      </div>
      <div>
        <Button
          class="!bg-black !border-none"
          as="a"
          label="Repositorio"
          :href="repo_url"
          target="_blank"
          icon="pi pi-github"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import Button from "primevue/button";
import Galleria from "primevue/galleria";
import Icon from "./Icon.vue";
import Tag from "primevue/tag";
import { ref } from "vue";

const { title, desc, imgs, repo_url, stack, preview_url } = defineProps({
  title: String,
  desc: String,
  imgs: Array,
  repo_url: String,
  preview_url: String,
  stack: Array,
  is_done: Boolean,
});

const responsiveOptions = ref([
  {
    breakpoint: "400px",
    numVisible: 4,
  },
  {
    breakpoint: "400px",
    numVisible: 1,
  },
]);
</script>
