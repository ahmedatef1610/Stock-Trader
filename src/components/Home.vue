<template>
  <div class="p-5">
    <h1>Trade or View your Portfolio</h1>
    <h6>You may Sava & Loan your Data</h6>
    <h6>Click on 'End Day' to Begin a New Day!</h6>
    <hr>
    <div>youe Funds: <h6 class="d-inline-block display-4">{{funds|currency}}</h6> </div>
  </div>
</template>

<script>
export default {
  computed: {
    funds(){
      return this.$store.getters.funds
    }
  },
};
</script>

<style>
</style>
