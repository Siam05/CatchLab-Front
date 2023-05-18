import { createStore } from 'vuex';

import portfolio from "./modules/portfolio/portfolio";
import services from './modules/home/services';
import clients from './modules/home/client';
import siteSettings from './modules/home/siteSettings';
import career from './modules/career/career';

const store = createStore({
  modules: {
    clients,
    portfolio,
    services,
    siteSettings,
    career
  }
})

export default store;