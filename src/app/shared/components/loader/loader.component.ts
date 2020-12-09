import { defineComponent } from '@vue/composition-api';

import VirusLogo from '@/assets/images/svg/virus.svg';

export default defineComponent({
  name: 'Loader',

  components: {
    VirusLogo,
  },

  props: {
    isLoading: {
      type: Boolean,
      default: true,
    },
  },
});
