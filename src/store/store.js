import Vue from 'vue';
import Vuex from 'vuex';

import portfolio from './modules/portfolio.js';
import stocks from './modules/stocks.js';

import * as actions from './actions.js';

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        portfolio,
        stocks,
    },
    actions,
});