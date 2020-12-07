import { defineComponent } from '@vue/composition-api';

import AppBottomBar from '@/app/shared/components/bottom-bar/bottom-bar.component.vue';
import AppCard from '@/app/shared/components/card/card.component.vue';
import AppContent from '@/app/shared/components/content/content.component.vue';
import AppPage from '@/app/shared/components/page/page.component.vue';
import AppTopBar from '@/app/shared/components/top-bar/top-bar.component.vue';

export default defineComponent({
  name: 'Landing',

  components: {
    AppBottomBar,
    AppCard,
    AppContent,
    AppPage,
    AppTopBar,
  },
});
