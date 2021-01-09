import { defineComponent, onMounted, onUnmounted } from '@vue/composition-api';

import { BG_COLOR_CLASS } from './page.constant';

export default defineComponent({
  name: 'Page',

  setup() {
    const body = document.querySelector('body');

    onMounted((): void => {
      addBackgroundColor();
    });

    onUnmounted((): void => {
      removeBackgroundColor();
    });

    function addBackgroundColor(): void {
      body?.classList.add(BG_COLOR_CLASS);
    }

    function removeBackgroundColor(): void {
      body?.classList.remove(BG_COLOR_CLASS);
    }
  },
});
