<template>
  <!-- TODO:
    - Hero
    - Sobre min
    - Como eu trabalho
  -->

  <main class="w-full max-w-[1700px] min-h-screen flex flex-col gap-8">
    <!-- Hero -->
    <section class="h-screen md:h-[90vh] w-full flex flex-col center bg">
      <div class="p-20 rounded-lg flex flex-col gap-4">
        <div class="flex flex-col center gap-2">
          <h1 class="bg-transparent border-none main-title">
            Ola, eu sou o caio
          </h1>
          <div class="flex flex-row w-full center gap-4">
            <span class="text-2xl font-semibold text-slate-200"
              >Desenvolvedor full stack</span
            >
            <div class="flex flex-row gap-2 center">
              <Button
                icon="pi pi-github"
                rounded
                aria-label="Filter"
                class="bg-black !border-none"
              />
              <Button
                icon="pi pi-linkedin"
                rounded
                aria-label="Filter"
                class="bg-sky-600 !border-none"
              />
              <Button
                icon="pi pi-envelope"
                rounded
                aria-label="Filter"
                class="bg-yellow-600 !border-none"
              />
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- About me -->
    <section
      class="h-auto lg:h-screen w-full px-10 center flex flex-col lg:flex-row text-lg"
    >
      <div class="w-full flex flex-col gap-5">
        <h3 class="text-3xl font-bold">Um pouco sobre mim</h3>

        <div class="text-xl text-justify">
          <p class="indent-4">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo
            voluptas eligendi possimus maxime excepturi laboriosam incidunt
            perspiciatis. Quaerat optio sapiente ipsa hic quibusdam voluptatibus
            numquam. Illum ducimus odit soluta quos.
          </p>

          <p class="indent-4">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo
            voluptas eligendi possimus maxime excepturi laboriosam incidunt
            perspiciatis. Quaerat optio sapiente ipsa hic quibusdam voluptatibus
            numquam. Illum ducimus odit soluta quos.
          </p>
          <p class="indent-4">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo
            voluptas eligendi possimus maxime excepturi laboriosam incidunt
            perspiciatis. Quaerat optio sapiente ipsa hic quibusdam voluptatibus
            numquam. Illum ducimus odit soluta quos.
          </p>
          <p class="indent-4">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo
            voluptas eligendi possimus maxime excepturi laboriosam incidunt
            perspiciatis. Quaerat optio sapiente ipsa hic quibusdam voluptatibus
            numquam. Illum ducimus odit soluta quos.
          </p>
        </div>
      </div>

      <div class="w-full p-16 hidden md:block">
        <img :src="illustration" />
      </div>
    </section>

    <!-- Como eu trabalho / whats more / stack -->
    <section class="w-full px-10 center flex gap-8 flex-col">
      <!-- <Avatar -->
      <!--   class="h-56 w-56 border border-2 border-slate-200" -->
      <!--   shape="circle" -->
      <!--   image="https://avatars.githubusercontent.com/u/48222542?v=4" -->
      <!-- /> -->
      <!---->
      <div
        class="flex flex-col md:flex-row w-full h-auto min-h-[300px] gap-2 max-w-[1500px]"
      >
        <Panel class="w-full text-gray-100 !bg-slate-900/80">
          <template #header>
            <h5 class="text-green-100 font-semibold">
              Perfil como profissional
            </h5>
          </template>
          <div class="px-2 flex flex-col gap-4">
            <p class="indent-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Recusandae, quidem numquam. Consequuntur facere assumenda animi
              dolorem numquam placeat est explicabo tempore, unde recusandae
              dolor possimus ipsa rerum modi esse dignissimos?
            </p>
            <ul class="list-disc px-7">
              <li>Generico 1</li>
              <li>Eu gosto de comer brigadeirao</li>
              <li>Agua é muito mais gostoso do que coca cola</li>
              <li>Pescar é muito bom</li>
              <li>Boxer > Qualquer coisa</li>
            </ul>
          </div>
        </Panel>

        <!-- <Divider layout="vertical" /> -->

        <div class="w-full flex flex-col gap-2">
          <Panel class="!bg-transparent text-white">
            <p class="m-0">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
            </p>
          </Panel>

          <Panel class="!bg-transparent text-white">
            <template #header>
              <h5 class="text-green-100 font-semibold">Tempo livre</h5>
            </template>
            <ul class="flex flex-col gap-3">
              <li class="flex gap-2 items-center">
                🐟
                <span>Fazer algo</span>
              </li>
              <li class="flex gap-2 items-center">
                🎮
                <span>Fazer algo</span>
              </li>
              <li class="flex gap-2 items-center">
                📖
                <span>Fazer algo</span>
              </li>
            </ul>
          </Panel>
        </div>
      </div>
    </section>
  </main>
</template>

<style lang="css">
.bg {
  /* background-image: url("../../assets/bg.svg"); */
  background-size: cover;
}
</style>

<script setup>
import img from "../../assets/bg.svg";
import Fieldset from "primevue/fieldset";
import Divider from "primevue/divider";
import Avatar from "primevue/avatar";
import Accordion from "primevue/accordion";
import AccordionPanel from "primevue/accordionpanel";
import AccordionHeader from "primevue/accordionheader";
import AccordionContent from "primevue/accordioncontent";
import Panel from "primevue/panel";
import Icon from "../ui/Icon.vue";
import Button from "primevue/button";
import illustration from "../../assets/illustration.svg";
</script>
