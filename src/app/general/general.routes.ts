import { RouteConfig } from 'vue-router';

import GeneralComponent from './general.component.vue';

const generalRoutes: RouteConfig[] = [
  {
    path: '/',
    name: 'General',
    component: GeneralComponent,
    children: [
      {
        path: 'about',
        name: 'About',
        component: () =>
          import(/* webpackChunkName: "about" */ './about/about.component.vue'),
      },
      {
        path: '*',
        name: 'NotFound',
        component: () =>
          import(
            /* webpackChunkName: "not-found" */ './not-found/not-found.component.vue'
          ),
      },
    ],
  },
];

export default generalRoutes;
