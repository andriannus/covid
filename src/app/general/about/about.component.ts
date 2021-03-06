import { defineComponent } from '@vue/composition-api';
import { useI18n } from 'vue-i18n-composable';

import AppCard from '@/app/shared/components/card/card.component.vue';
import AppContent from '@/app/shared/components/content/content.component.vue';

export default defineComponent({
  name: 'About',

  metaInfo: {
    title: 'Tentang',
  },

  components: {
    AppCard,
    AppContent,
  },

  setup() {
    return {
      ...useI18n(),
    };
  },
});
