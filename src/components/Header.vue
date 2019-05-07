<template>
  <nav class="navbar navbar-expand-md navbar-light bg-light mt-5">
    <router-link class="navbar-brand" to="/">Stock Trader</router-link>

    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
    >
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav w-100">
        <router-link class="nav-item" to="/portfolio" activeClass="active" exact tag="li">
          <a class="nav-link">Portfolio</a>
        </router-link>

        <router-link class="nav-item" to="/stocks" activeClass="active" exact tag="li">
          <a class="nav-link">Stocks</a>
        </router-link>

        <li class="nav-item ml-md-auto">
          <a class="nav-link aaa" @click="endDay" style="cursor:poniter">End Day</a>
        </li>

        <li class="nav-item dropdown">
          <a
            class="nav-link dropdown-toggle"
            href="#"
            id="navbarDropdown"
            data-toggle="dropdown"
            @click="isDropdownOpen=!isDropdownOpen"
            :class="{'show':isDropdownOpen}"
          >Save & Load</a>
          <div class="dropdown-menu" :class="{'show':isDropdownOpen}">
            <a class="dropdown-item" href="#" @click="saveData">Save Data</a>
            <div class="dropdown-divider"></div>
            <a class="dropdown-item" href="#" @click="loadData">Load Data</a>
          </div>
        </li>

        <span class="navbar-text ml-md-4 text-danger font-weight-bolder">Funds:{{$store.getters.funds|currency}}</span>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      // isDropdownOpen: false
    };
  },
  methods: {
    endDay() {
      this.$store.dispatch("randomizeStocks");
    },
    saveData() {
      this.isDropdownOpen = !this.isDropdownOpen;

      const data = {
        funds: this.$store.getters.funds,
        stockPortfolio: this.$store.getters.stockPortfolio,
        stocks: this.$store.getters.stocks
      };

      this.$http.put("data.json", data);
      
    },
    loadData() {
      this.isDropdownOpen = !this.isDropdownOpen;
      this.$store.dispatch("loadData");
    }
  }
};
</script>

<style>
.aaa {
  cursor: pointer;
}
</style>
