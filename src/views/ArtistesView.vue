<template>
  <h2 class="text-4xl text-center text-white font-Roboto font-bold py-8">
    Les Artistes
  </h2>
  <div class="grid grid-cols-1 lg:grid-cols-3 justify-items-center py-6">
    <CardKekra></CardKekra>
    <CardWallace></CardWallace>
    <CardAnnie></CardAnnie>
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-3 justify-items-center py-4">
    <CardBeeby></CardBeeby>
    <CardKhali></CardKhali>
    <CardFeve></CardFeve>
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-3 justify-items-center py-4">
    <CardLala></CardLala>
    <CardRad></CardRad>
    <CardJ9ueve></CardJ9ueve>
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-2 justify-items-center py-4">
    <CardJade></CardJade>
    <CardMalo></CardMalo>
  </div>
</template>

<script>
import CardKekra from "../components/CardKekra.vue";
import CardWallace from "../components/CardWallace.vue";
import CardAnnie from "../components/CardAnnie.vue";
import CardBeeby from "../components/CardBeeby.vue";
import CardKhali from "../components/CardKhali.vue";
import CardFeve from "../components/CardFeve.vue";
import CardJ9ueve from "../components/CardJ9ueve.vue";
import CardLala from "../components/CardLala.vue";
import CardRad from "../components/CardRad.vue";
import CardJade from "../components/CardJade.vue";
import CardMalo from "../components/CardMalo.vue";
export default {
  components: {
    CardKekra,
    CardWallace,
    CardAnnie,
    CardFeve,
    CardKhali,
    CardBeeby,
    CardJ9ueve,
    CardLala,
    CardRad,
    CardJade,
    CardMalo,
  },
};
</script>