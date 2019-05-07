<template>
  <div id="app" class="container">
    <app-header></app-header>
    <div class="row">
      <div class="col-12">
        <transition name="slide" mode="out-in">
          <router-view></router-view>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "./components/Header.vue";

export default {
  components: {
    appHeader: Header
  },
  created() {
    this.$store.dispatch("initStocks");
  }
};
</script>

<style lang="scss">
.slide-enter-active {
  animation: slide-in 0.3s ease-in 0s 1 normal forwards;
}
.slide-leave-active {
   animation: slide-out 0.3s ease-out 0s 1 normal forwards;
}
@keyframes slide-in {
  0% {
    transform: translateY(-30px);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}
@keyframes slide-out {
  100% {
    transform: translateY(-30px);
    opacity: 0;
  }
  0% {
    transform: translateY(0);
    opacity: 1;
  }
}
</style>
