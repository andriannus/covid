import { defineComponent, onMounted, onUnmounted } from '@vue/composition-api';

import { BG_COLOR_CLASS } from './page.constant';

export default defineComponent({
  name: 'Page',

  setup() {
    const body = document.querySelector('body');

    onMounted(() => {
      addBackgroundColor();
    });

    onUnmounted(() => {
      removeBackgroundColor();
    });

    const addBackgroundColor = () => {
      body?.classList.add(BG_COLOR_CLASS);
    };

    const removeBackgroundColor = () => {
      body?.classList.remove(BG_COLOR_CLASS);
    };
  },
});
