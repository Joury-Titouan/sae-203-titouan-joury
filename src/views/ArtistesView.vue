<template>
  <h2 class="text-4xl text-center font-Roboto py-8">Les Artistes</h2>
  <div class="grid grid-cols-3 justify-items-center">
    <CardKekra></CardKekra>
    <CardKekra></CardKekra>
    <CardKekra></CardKekra>
  </div>
</template>

<script>
import CardKekra from "../components/CardKekra.vue";
export default {
  components: {
    CardKekra,
  },
};
</script>