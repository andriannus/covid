import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';

import generalRoutes from '@/app/general/general.routes';
import landingRoutes from '@/app/landing/landing.routes';

Vue.use(VueRouter);

const routes: RouteConfig[] = [...landingRoutes, ...generalRoutes];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
});

export default router;
