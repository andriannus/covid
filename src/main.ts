import Vue from 'vue';

import App from '@/app/app.component.vue';
import router from '@/app/app.routes';
import { i18n } from '@/plugins/vue-i18n.plugin';

import '@/plugins';
import '@/register-service-worker';

Vue.config.productionTip = false;

new Vue({
  i18n,
  router,
  render: h => h(App),
}).$mount('#app');
