import { defineComponent, reactive } from '@vue/composition-api';
import { useI18n } from 'vue-i18n-composable';

import AppDialog from '@/app/shared/components/dialog/dialog.component.vue';

export default defineComponent({
  name: 'ButtonLanguage',

  components: {
    AppDialog,
  },

  setup() {
    const state = reactive({
      isDialogShown: false,
      i18n: useI18n(),
    });

    const toggleDialog = () => {
      state.isDialogShown = !state.isDialogShown;
    };

    const setLocale = (selectedLocale: string) => {
      state.i18n.locale = selectedLocale;
      toggleDialog();
    };

    return {
      setLocale,
      state,
      toggleDialog,
      ...useI18n(),
    };
  },
});
