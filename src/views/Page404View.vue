<template>
  <h2 class="text-7xl text-center font-Roboto text-red-500 py-8">Erreur 404</h2>

  <form
    action="https://duckduckgo.com/"
    method="GET"
    x-data="{ q:'', }"
    x-on:submit="q = q + ' site:mmimontbeliard.com'"
  >
    <label for="q">Text à chercher :</label>
    <input type="text" id="q" name="q" x-model="q" />
    <button type="submit">Rechercher</button>
  </form>

  <div class="grid justify-items-center">
    <CardKekra></CardKekra>
  </div>
</template>