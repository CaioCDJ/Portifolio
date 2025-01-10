<template>
  <main class="p-4 gap-6 max-w-[1700px] overflow-y-auto px-10">
    <div class="flex w-full flex-col gap-8">
      <section class="flex flex-col w-full">
        <!-- <div class="h-[50vh]"></div> -->
        <div class="flex flex-col center gap-4">
          <h1 class="text-3xl text-sky-500 font-bold">Projetos</h1>
          <div
            class="text-gray-200 font-lg text-center w-full md:w-3/4 indent-4 [text-shadow:_0_4px_8px_rgba(30_30_30_/_0.5)]"
          >
            Aqui estão alguns dos projetos interesantes, os quais eu desenvolvi
            ou ainda estou desenvolvendo. A maioria deles foram idealizados no
            ambito de ampliar o meu conhecimento e minhas habilidades como
            desenvolvedor.
          </div>
        </div>
      </section>

      <!-- Listagem de projetos -->

      <section class="flex flex-col gap-4 w-full">
        <div class="card flex flex-wrap justify-center gap-4">
          <div class="flex items-center gap-3" v-for="item in boxes_tech">
            <Checkbox
              @change="on_change_boxes()"
              :name="item"
              v-model="checked_boxes"
              :value="item"
            />
            <label :for="item">{{ item }} </label>
          </div>
        </div>

        <div
          class="grid grid-cols-1 lg:grid-cols-2 gap-4 w-full"
          v-auto-animate
        >
          <ProjectCard
            v-for="item in projects"
            :title="item.title"
            :desc="item.desc"
            :imgs="item.imgs"
            :repo_url="item.repo_url"
            :preview_url="item.preview_url"
            :stack="item.stack"
          />
        </div>
      </section>

      <div class="w-full flex center mt-8">
        <Button
          as="a"
          label="Mais projetos"
          href="https://github.com/CaioCDJ?tab=repositories"
          target="_blank"
          rel="noopener"
        />
      </div>
    </div>
  </main>
</template>

<script setup>
import Checkbox from "primevue/checkbox";
import Button from "primevue/button";
import ProjectCard from "../ui/ProjectCard.vue";
import project_data from "../../data/projects.js";
import { ref, onMounted } from "vue";

onMounted(() => {
  projects.value = project_data;
});

const checked_boxes = ref([]);
const boxes_tech = [
  "csharp",
  "tailwind",
  "ts",
  "js",
  "react",
  "vue",
  "express",
];

const projects = ref();

const on_change_boxes = () => {
  if (checked_boxes.value.length > 0) {
    projects.value = project_data.filter((item) => {
      let has_stack = [];

      for (let index = 0; index < checked_boxes.value.length; index++) {
        has_stack.push(item.stack.includes(checked_boxes.value[index]));
      }

      let response = false;

      has_stack.forEach((item_stack) => {
        if (checked_boxes.value.length == 1) {
          response = response == true || item_stack == true;
        } else {
          response = item_stack == true;
        }
      });

      if (response) return item;
    });
  } else {
    projects.value = project_data;
  }
};
</script>
