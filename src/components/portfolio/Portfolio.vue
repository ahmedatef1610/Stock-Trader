<template>
  <div class="row">
    <app-stock v-for="(stock,i) in stocks" :key="i" :stock="stock"></app-stock>
  </div>
</template>

<script>
import Stock from "./Stock.vue";
export default {
  components: {
    appStock: Stock
  },
  computed: {
    stocks(){
      return this.$store.getters.stockPortfolio;
    }
  },
};
</script>

<style>
</style>
