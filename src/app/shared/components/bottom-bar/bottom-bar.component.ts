import { defineComponent } from '@vue/composition-api';
import { useI18n } from 'vue-i18n-composable';

export default defineComponent({
  name: 'BottomBar',

  setup() {
    return {
      ...useI18n(),
    };
  },
});
