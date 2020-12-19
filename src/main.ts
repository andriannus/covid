import Vue from 'vue';

import App from '@/app/app.component.vue';
import router from '@/app/app.routes';

import '@/plugins';
import '@/register-service-worker';

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
