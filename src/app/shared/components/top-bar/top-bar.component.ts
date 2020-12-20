import { defineComponent } from '@vue/composition-api';

import AppButtonLanguage from '@/app/shared/components/button-language/button-language.component.vue';
import CovidLogo from '@/assets/images/svg/covid-19.svg';

export default defineComponent({
  name: 'TopBar',

  components: {
    AppButtonLanguage,
    CovidLogo,
  },
});
