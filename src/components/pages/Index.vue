<template>
  <!-- TODO:
    - Hero
    - Sobre min
    - Como eu trabalho
  -->

  <main class="w-full max-w-[1700px] min-h-screen ">
    <!-- Hero -->
    <section class="h-screen w-full flex flex-col center bg">
      <h1 class="text-8xl font-bold">Ola, eu sou o caio</h1>
      <span class="text-xl font-semibold text-slate-200">Desenvolvedor full stack</span>
    </section>

    <!-- About me -->
    <section class="h-auto lg:h-screen w-full px-10 center flex flex-col lg:flex-row text-lg">
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

      <div class="w-full"></div>
    </section>

    <!-- Como eu trabalho / whats more  -->
    <section class="h-screen w-full px-10 center flex gap-2 flex-col lg:flex-row">
      <div class="w-full">
        <div></div>
      </div>
      <div class="w-full p-2 px-4 flex flex-col gap-4">
        <h4>Como eu trabalho</h4>
        <div>
          
        </div>
        <ul></ul>
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
</script>
