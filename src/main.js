import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import App from './App.vue';

import {routes} from './routes';
import store from './store/store.js';

Vue.use(VueResource);
Vue.http.options.root='https://vuejs-stock-trader-7cc14.firebaseio.com/';

Vue.use(VueRouter);
const router=new VueRouter({
  mode:'history',
  routes,
});

Vue.filter('currency',(value)=>{
  return `${value.toLocaleString('en-EN',{ style: 'currency', currency: 'USD' })}`
});

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
