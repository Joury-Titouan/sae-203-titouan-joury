<template>
  <div class="GuideStyle">
    <h2 class="font-Roboto text-7xl font-bold text-center py-8 text-red-400">
      Guide de Style
    </h2>
  </div>

  <!-- TEXTES -->

  <div class="grid justify-items-center pb-8">
    <h2 class="text-6xl font-Roboto text-white pb-6">Textes</h2>
    <p class="text-4xl font-Roboto">Texte Titre : Roboto 4xl</p>
    <p class="text-base font-Readex-Pro">Texte body : Readex Pro base</p>
    <p class="text-xl font-Readex-Pro">Texte Footer Titre : Readex Pro xl</p>
    <p class="text-sm font-Readex-Pro">Texte Footer Body: Readex Pro sm</p>
  </div>

  <!-- COLORS -->

  <hr class="pt-8" />

  <div class="grid justify-items-center pb-8">
    <h2 class="text-6xl font-Roboto text-white">Couleurs</h2>
    <div class="flex mt-4 justify-center items-center">
      <div
        class="m-4 w-20 h-20 bg-black border-2 border-white rounded-xl"
      ></div>
      <div class="m-4 w-20 h-20 bg-indigo-300 rounded-xl"></div>
      <div class="m-4 w-20 h-20 bg-gray-800 rounded-xl"></div>
    </div>
  </div>

  <hr class="pt-8" />

  <div class="grid justify-items-center">
    <h2 class="text-6xl font-Roboto text-white">Cards Artistes</h2>
    <div class="flex mt-4 pb-8 justify-center items-center">
      <CardKekra></CardKekra>
    </div>
  </div>
</template>

<style>
</style>

<script>
import CardKekra from "../components/CardKekra.vue";
export default {
  components: {
    CardKekra,
  },
};
</script>