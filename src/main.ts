import Vue from 'vue';

import App from '@/App.vue';
import router from '@/main.routes';
import '@/main.scss';
import '@/plugins';
import '@/register-service-worker';
import store from '@/store';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
