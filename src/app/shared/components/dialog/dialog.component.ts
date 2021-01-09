import {
  defineComponent,
  onUnmounted,
  reactive,
  watch,
} from '@vue/composition-api';

import { CLIP_CLASS } from './dialog.constant';
import { DialogState } from './dialog.model';

import AppFadeTransition from '@/app/shared/components/fade/fade.component.vue';

export default defineComponent({
  name: 'Dialog',

  components: {
    AppFadeTransition,
  },

  props: {
    value: {
      type: Boolean,
      default: false,
    },
  },

  setup(props) {
    const state = reactive<DialogState>({
      html: document.querySelector('html'),
    });

    onUnmounted((): void => {
      removeClipClass();
    });

    watch(
      () => props.value,
      value => {
        if (value) {
          return addClipClass();
        }

        removeClipClass();
      },
    );

    function hasClipClass(): boolean {
      return !!state.html?.classList.contains(CLIP_CLASS);
    }

    function addClipClass(): void {
      if (!hasClipClass()) {
        state.html?.classList.add(CLIP_CLASS);
      }
    }

    function removeClipClass(): void {
      if (hasClipClass()) {
        state.html?.classList.remove(CLIP_CLASS);
      }
    }
  },
});
