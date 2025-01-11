<template>
  <main
    class="w-full min-h-screen flex flex-col items-center gap-5 px-4"
  >
    <section
      class="px-10 md:px-20 py-5 md:py-10 rounded-lg flex flex-col gap-4 center h-auto md:h-[300px] max-w-[1700px]"
    >
      <h1 class="title">
        Minhas experiencias Profissionais
      </h1>
      <div
        class="text-center w-full [text-shadow:_0_4px_8px_rgba(30_30_30_/_0.5)] leading-snug font-semibold max-w-lg text-lg text-gray-100"
      >
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae
        pariatur, consequuntur esse explicabo consequatur reiciendis ad quam?
      </div>
    </section>

    <section class="w-full max-w-[1700px] flex flex-col gap-10 center px-4">
      <Stepper class="w-full lg:w-[800px] !bg-transparent" :value="1">
        <StepItem
          v-for="(item, index) in data"
          :value="index + 1"
          class="!bg-none"
        >
          <Step class="!text-green-500 !text-bold !text-xl"><Tag  severity="info" :value="item.company" rounded></Tag>  </Step>
          <StepPanel
            v-slot="{ activateCallback }"
            class="max-w-[900px] !bg-transparent !border-none !text-gray-200"
          >
            <div
              class="flex flex-col gap-2 text-xl px-10 py-5 rounded-md bg-[#050032]/80 border border-2 border-sky-500/30"
            >
              <div class="flex flex-row gap-2 items-center justify-between">
                <div class="flex center gap-2">
                  <Avatar class="!w-16 !h-16" :src="item.logo" shape="circle" />
                  <div class="flex flex-col">
                    <span
                      class="font-bold text-sky-400 text-2xl"
                      v-text="item.role"
                    >
                    </span>
                  </div>
                </div>
                <div class="text-gray-400">{{ item.period }}</div>
              </div>

              <div>
                <div class="flex flex-col gap-4">
                  <p class="m-0">{{ item.desc }}</p>
                  <div class="flex flex-row flex-wrap w-full gap-2">
                    <Icon v-for="icon in item.stack" :name="icon" />
                  </div>
                </div>
              </div>
            </div>
            <div class="py-6">
              <Button label="Next" @click="activateCallback('2')" />
            </div>
          </StepPanel>
        </StepItem>
      </Stepper>
    </section>
  </main>
</template>

<script setup>
import Panel from "primevue/panel";
import Avatar from "primevue/avatar";
import Icon from "../ui/Icon.vue";
import Stepper from "primevue/stepper";
import StepList from "primevue/steplist";
import StepPanels from "primevue/steppanels";
import StepItem from "primevue/stepitem";
import Step from "primevue/step";
import StepPanel from "primevue/steppanel";
import xp_data from "../../data/experiences.js";
import Tag from 'primevue/tag';


const data = xp_data;
</script>
