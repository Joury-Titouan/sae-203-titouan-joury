<script setup>
import { RouterLink, RouterView } from "vue-router";
import HelloWorld from "@/components/HelloWorld.vue";
</script>

<template>
  <header>
    <div class="lg:flex hidden">
      <nav class="flex items-center justify-between flex-wrap bg-white p-6">
        <img
          class="flex items-center flex-shrink-0 w-3 h-3 mr-6"
          src="/Logo Hangar.svg"
          alt="Logo Hangar"
        />

        <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
          <div class="text-sm lg:flex-grow text-left">
            <div
              class="
                block
                mt-4
                lg:inline-block lg:mt-0
                text-black
                mr-10
                text-base
              "
            >
              Rent
            </div>
            <div
              class="
                block
                mt-4
                lg:inline-block lg:mt-0
                text-black
                mr-10
                text-base
              "
            >
              Buy
            </div>
            <div
              class="
                block
                mt-4
                lg:inline-block lg:mt-0
                text-black
                mr-10
                text-base
              "
            >
              Sell
            </div>
            <div
              class="
                block
                mt-4
                lg:inline-block lg:mt-0
                text-black
                mr-10
                text-base
              "
            >
              Manage Property
            </div>
            <div
              class="
                block
                mt-4
                lg:inline-block lg:mt-0
                text-black
                mr-10
                text-base
              "
            >
              Ressources
            </div>
          </div>
          <!-- <div class="flex items-center flex-shrink-0 text-black mr-6"></div> -->
          <div class="flex justify-end">
            <button
              class="
                rounded-md
                border border-indigo-200
                bg-white
                py-2
                px-4
                font-bold
                text-indigo-500
                mr-4
              "
            >
              Login
            </button>
            <button
              class="
                rounded-md
                bg-indigo-500
                py-2
                px-4
                font-bold
                text-white
                mr-4
              "
            >
              Sign up
            </button>
          </div>
        </div>
      </nav>
    </div>
    <div class="flex lg:hidden">
      <div
        class="
          flex
          items-center
          flex-shrink-0
          text-black
          mr-6
          flex-wrap
          bg-white
          p-6
        "
      >
        <img
          class="flex justify-end w-8 h-8"
          src="/menu.svg"
          alt="menu hamburger"
        />
      </div>
    </div>
  </header>

  <RouterView />
</template>

<style>
@import "@/assets/base.css";
</style>
