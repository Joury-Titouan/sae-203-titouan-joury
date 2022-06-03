<script setup>
import TheWelcome from "@/components/TheWelcome.vue";
</script>

<template>
  <div class="grid justify-center py-8">
    <p class="font-Roboto font-bold text-white text-2xl">17 - 18 JUIN 2022</p>
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-3">
    <div class="bg-indigo-300 grid justify-center py-8">
      <img class="pb-2" src="/public/Hangar.jpg" alt="Hangar" />
      <div class="grid grid-cols-2">
        <h3 class="text-4xl text-white font-bold font-Roboto pt-4">Où ?</h3>
        <RouterLink to="/HangarView">
          <button
            class="
              grid
              items-center
              px-3
              py-1
              border-2
              rounded
              text-white
              border-white
              hover:text-black hover:border-black
            "
          >
            <p class="grid justify-center font-Readex-Pro text-base">
              En savoir plus
            </p>
          </button>
        </RouterLink>
      </div>
    </div>
    <div class="bg-black grid justify-center py-8">
      <img class="pb-2" src="/public/Foule.jpg" alt="Foule" />
      <div class="grid grid-cols-2">
        <h3 class="text-4xl text-white font-bold font-Roboto pt-4">Quand ?</h3>
        <RouterLink to="/ProgView">
          <button
            class="
              grid
              items-center
              px-3
              py-1
              border-2
              rounded
              text-white
              border-white
              hover:text-indigo-300 hover:border-indigo-300
            "
          >
            <p class="grid justify-center font-Readex-Pro text-base">
              En savoir plus
            </p>
          </button>
        </RouterLink>
      </div>
    </div>
    <div class="bg-indigo-300 grid justify-center py-8">
      <img class="pb-2" src="/public/Kekra.jpg" alt="Foule" />
      <div class="grid grid-cols-2">
        <h3 class="text-4xl text-white font-bold font-Roboto pt-4">Qui ?</h3>
        <button
          class="
            grid
            items-center
            px-3
            py-2
            border-2
            rounded
            text-white
            border-white
            hover:text-black hover:border-black
          "
        >
          <p class="grid justify-center font-Readex-Pro text-base">
            En savoir plus
          </p>
        </button>
      </div>
    </div>
  </div>
</template>
