import { RouteConfig } from 'vue-router';

const landingRoutes: RouteConfig[] = [
  {
    path: '/',
    name: 'Landing',
    component: () =>
      import(/* webpackChunkName: "not-found" */ './landing.component.vue'),
  },
];

export default landingRoutes;
