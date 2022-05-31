<script setup>
import { RouterLink, RouterView } from "vue-router";
import HelloWorld from "@/components/HelloWorld.vue";
</script>

<template>
  <header>
    <nav class="flex items-center justify-between flex-wrap bg-gray-800">
      <div class="flex items-center flex-no-shrink text-white mr-6">
        <Routerlink to="/">
          <img
            class="w-60 h-60"
            src="../public/Logo Hangar.svg"
            alt="Logo Hangar"
          />
        </Routerlink>
      </div>
      <div class="block lg:hidden">
        <button
          class="
            flex
            items-center
            px-3
            py-2
            border
            rounded
            text-neutral-300
            border-neutral-300
            hover:text-white hover:border-white
          "
        >
          <svg
            class="h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div class="text-lg font-Readex-Pro lg:flex-grow">
          <RouterLink
            to="/GuideView"
            class="
              block
              mt-4
              lg:inline-block lg:mt-0
              text-neutral-300
              hover:text-white
              mr-4
            "
          >
            Guide de style
          </RouterLink>
          <a
            href="#responsive-header"
            class="
              block
              mt-4
              lg:inline-block lg:mt-0
              text-neutral-300
              hover:text-white
              mr-4
            "
          >
            Le Hangar
          </a>
          <a
            href="#responsive-header"
            class="
              block
              mt-4
              lg:inline-block lg:mt-0
              text-neutral-300
              hover:text-white
              mr-4
            "
          >
            Les Artistes
          </a>
          <a
            href="#responsive-header"
            class="
              block
              mt-4
              lg:inline-block lg:mt-0
              text-neutral-300
              hover:text-white
            "
          >
            La Programmation
          </a>
        </div>
        <div>
          <a
            href="#"
            class="
              inline-block
              text-sm
              px-4
              py-2
              leading-none
              border
              rounded
              text-white
              border-white
              hover:border-transparent hover:text-neutral-200 hover:bg-white
              mt-4
              lg:mt-0
            "
            >Réserver</a
          >
        </div>
      </div>
    </nav>
  </header>

  <RouterView />

  <footer class="bg-gray-800 grid grid-cols-3 bottom-0 py-8">
    <div class="grid">
      <h4 class="grid justify-center font-Readex-Pro text-xl pb-4">
        Nous contacter
      </h4>
      <p class="grid justify-center text-sm">titouan.joury@gmail.com</p>
      <p class="grid justify-center text-sm">07 81 68 14 03</p>
    </div>
    <div class="grid justify-center">
      <h4 class="text-center text-xl pb-4">Nous retrouver sur</h4>
      <div class="grid grid-cols-3 justify-items-center">
        <img src="../public/icons8-facebook 1.svg" alt="Facebook" />
        <img src="../public/icons8-twitter 1.svg" alt="Twitter" />
        <img src="../public/icons8-instagram 1.svg" alt="Instagram" />
      </div>
    </div>

    <div class="grid">
      <h4 class="grid justify-center font-Readex-Pro text-xl pb-4">
        Mentions légales
      </h4>
      <p class="text-sm font-Readex-Pro px-28">
        Site réalisé dans le cadre d’un exercice pédagogique au sein du
        département MMI de Montbéliard.
      </p>
    </div>
  </footer>
</template>

<style>
@import "@/assets/base.css";
</style>
