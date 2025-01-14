<template>
  <main class="p-4 gap-6 max-w-[1700px] overflow-y-auto px-10">
    <section
      class="px-10 md:px-20 py-5 md:py-10 rounded-lg flex flex-col gap-4 center h-auto md:h-[300px] max-w-[1700px]"
    >
      <h1 class="title">Formação</h1>
      <div
        class="text-center w-full [text-shadow:_0_4px_8px_rgba(30_30_30_/_0.5)] leading-snug font-semibold max-w-lg text-lg text-gray-100"
      >
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae
        pariatur, consequuntur esse explicabo consequatur reiciendis ad quam?
      </div>
    </section>

    <!--
      TODO:
      - Faculdades
      - Cursos
    -->

    <section class="w-full flex flex-col center gap-5">

      <div class="grid grid-cols-1 w-full justify-items-center gap-12">
        <div
          class="flex flex-col md:flex-row justify-center items-center gap-2 md:gap-6 w-full max-w-[1000px] p-2"
          v-for="i in [1, 2]"
        >
          <Avatar
            class="h-40 w-40 md:h-56 md:w-56"
            image="https://icon-icons.com/icons2/300/PNG/256/certificate-icon_31840.png"
            shape="circle"
          />

          <div
            class="flex flex-col gap-2 w-full px-10 py-5 rounded-md bg-[#050032]/80 border border-2 border-sky-500/30"
          >
            <div class="flex flex-col md:flex-row justify-between gap-3 w-full">
              <div>
                <h5 class=" font-bold text-sky-400 text-2xl">UniSei la</h5>
                <span class="text-sky-600 text-xl font-bold"
                  >Analise e Desenvolvimento de sistemas</span
                >
              </div>

              <div class="text-gray-400">2023 - 2027</div>
            </div>

            <div class="flex flex-col gap-2">
              <div class="indent-2 text-justify text-gray-200">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum
                obcaecati ducimus sunt voluptate, similique, nulla labore
                voluptates dicta cum vitae nobis eaque. Eaque iste magnam nihil
                consequuntur id nostrum amet?
              </div>
              <ul class="list-disc px-7">
                <li>
                  Olasksks askjdjmas dlkçam sjasklçd lkaçs doamsdklmaslkçdmaslk
                  md
                </li>
                <li>Olasksks askdnas da sd js dja sd sakdsakdnklasd ajs d</li>
                <li>Olasksks askdnas da sd js dja sd sakdsakdnklasd ajs d</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="flex flex-col center gap-5 mt-20">
      <h4 class="text-3xl font-bold text-sky-500">Cursos</h4>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div
          class="flex w-full px-4 py-2 flex-col gap-3 rounded bg-[#050032]/80 border border-2 border-sky-500/30"
          v-for="i in [1, 2, 1, 1, 1]"
        >
          <div class="w-full flex flex-col">
            <span class="font-semibold text-sky-400 text-lg"
              >Analise e Desenvolvimento de sistemas</span
            >
            <span class="text-gray-400"> 2019 - 2024 </span>
          </div>
          <div class="">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi,
            deleniti officiis corporis debitis laudantium ut aperiam vero
            dolores animi atque quam rerum qui
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
import Avatar from "primevue/avatar";
import Divider from "primevue/divider";
</script>
