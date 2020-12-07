import { defineComponent } from '@vue/composition-api';

import CovidLogo from '@/assets/images/svg/covid-19.svg';

export default defineComponent({
  name: 'TopBar',

  components: {
    CovidLogo,
  },
});
