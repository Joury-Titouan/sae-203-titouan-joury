<template>
  <h2 class="text-4xl text-center font-Roboto py-8">Les Artistes</h2>
  <div class="grid justify-items-center">
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