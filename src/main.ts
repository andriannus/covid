import Vue from 'vue';

import App from '@/app/app.component.vue';
import router from '@/app/app.routes';

import '@/plugins';
import '@/register-service-worker';
import store from '@/store';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
