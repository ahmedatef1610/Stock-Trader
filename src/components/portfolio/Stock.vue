<template>
  <div class="col-sm-6 col-md-4">
    <div class="card my-2">
      <h5 class="card-header text-danger">
        {{stock.name}}
        <small>(Price:{{stock.price|currency}} | Quantity:{{stock.quantity}})</small>
      </h5>
      <div class="card-body d-flex justify-content-between">
        <input
          type="number"
          class="form-control w-50 border"
          placeholder="Quantity"
          v-model="quantity"
          :class="{'border-danger':insufficientQuantity}"
        >
        <button
          class="btn btn-danger"
          @click="sellStock"
          :disabled="insufficientQuantity|| quantity<=0 || !Number.isInteger(Number(quantity))"
        >{{insufficientQuantity?'No Stocks':'Sell'}}</button>
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
    insufficientQuantity() {
      return this.quantity > this.stock.quantity;
    }
  },
  methods: {
    sellStock() {
      const order = {
        stockId: this.stock.id,
        stockPrice: this.stock.price,
        quantity: Number(this.quantity)
      };
      this.$store.dispatch("sellStock", order);
      this.quantity = null;
    }
  }
};
//:max="stock.quantity"
</script>

<style>
</style>
