import { defineComponent, reactive } from '@vue/composition-api';
import { useI18n } from 'vue-i18n-composable';

import { ButtonLanguageState } from './button-language.model';

import AppDialog from '@/app/shared/components/dialog/dialog.component.vue';
import { Locale } from '@/app/shared/enums/i18n.enum';

export default defineComponent({
  name: 'ButtonLanguage',

  components: {
    AppDialog,
  },

  setup() {
    const state = reactive<ButtonLanguageState>({
      isDialogShown: false,
      i18n: useI18n(),
    });

    const toggleDialog = () => {
      state.isDialogShown = !state.isDialogShown;
    };

    const setLocale = (locale: Locale) => {
      state.i18n.locale = locale;
    };

    const changeLanguage = (locale: Locale) => {
      setLocale(locale);
      toggleDialog();
    };

    return {
      changeLanguage,
      Locale,
      state,
      toggleDialog,
      ...useI18n(),
    };
  },
});
