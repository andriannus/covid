import { RouteConfig } from 'vue-router';

const landingRoutes: RouteConfig[] = [
  {
    path: '/',
    name: 'Landing',
    component: () =>
      import(/* webpackChunkName: "landing" */ './landing.component.vue'),
  },
];

export default landingRoutes;
