<template>
  <main class="w-full max-w-[1700px] min-h-screen flex flex-col items-center gap-10 px-4">
    
    <section class="px-10 md:px-20 py-5 md:py-10 rounded-lg flex flex-col gap-4 center  h-auto md:h-[300px]">
      <h1 class="text-2xl lg:text-5xl font-bold text-cyan-400">Minhas experiencias Profissionais</h1>
      <div class="text-center w-full [text-shadow:_0_4px_8px_rgba(30_30_30_/_0.5)] leading-snug font-semibold max-w-lg text-lg text-gray-100">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae
        pariatur, consequuntur esse explicabo consequatur reiciendis ad quam?
      </div>
    </section>

    <section class="w-full flex flex-col gap-10 center px-4">
      <Panel v-for="item in data"
        class="max-w-[900px] !bg-slate-900/90 !border-none  !text-gray-200">
        <template #header>
          <div class="flex items-center justify-between gap-2 w-full">
            <div class="flex center gap-2">
              <Avatar  class="!w-16 !h-16" :image="item.logo"
                shape="circle" />
              <div class="flex flex-col">
                <span class="font-bold text-blue-300 text-2xl" v-text="item.company"> </span>
                <span class="text-gray-300 italic font-lg">{{item.role}} </span>
              </div>

            </div>

            <div class="text-gray-400">
              {{item.period}} 
            </div>
          </div>
        </template>

        <div class="flex flex-col gap-4">
          <p class="m-0">
            {{item.desc}}
          </p>
          <div class="flex flex-row flex-wrap w-full gap-2">
            <Icon v-for="icon in item.stack" :name="icon" />
          </div>
        </div>
      </Panel>
    </section>
  </main>
</template>

<script setup>
import Panel from "primevue/panel";
import Avatar from "primevue/avatar";
import Icon from "../ui/Icon.vue";

import xp_data from '../../data/experiences.js'

const data = xp_data

</script>
