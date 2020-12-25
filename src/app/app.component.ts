import { defineComponent } from '@vue/composition-api';

export default defineComponent({
  metaInfo: {
    title: 'Selamat Datang!',
    titleTemplate: '%s — COVID19',
    meta: [
      {
        vmid: 'description',
        name: 'description',
        content: 'COVID19 Monitoring with Vue.js and TypeScript',
      },
    ],
  },
});
