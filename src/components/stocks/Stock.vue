<template>
  <div class="col-sm-6 col-md-4">
    <div class="card my-2">
      <h5 class="card-header text-success">
        {{stock.name}}
        <small>(Price:{{stock.price|currency}})</small>
      </h5>
      <div class="card-body d-flex justify-content-between align-items-center">
        <input type="number" class="form-control w-50 border" :class="{'border-danger':insufficientFunds}" placeholder="Quantity" v-model="quantity">
        <button
          class="btn btn-success"
          @click="buyStock"
          :disabled="insufficientFunds|| quantity<=0 || !Number.isInteger(Number(quantity))"
        >{{insufficientFunds?'No Money':'Buy'}}</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["stock"],
  data() {
    return {
      quantity: null
    };
  },
  computed: {
    insufficientFunds() {
      return this.quantity * this.stock.price > this.$store.getters.funds;
    }
  },
  methods: {
    buyStock() {
      const order = {
        stockId: this.stock.id,
        stockPrice: this.stock.price,
        quantity: Number(this.quantity)
      };
      console.log(order);

      this.$store.dispatch("buyStocks", order);

      this.quantity = null;
    }
  }
};
</script>

<style>
</style>
