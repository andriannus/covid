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

    function toggleDialog(): void {
      state.isDialogShown = !state.isDialogShown;
    }

    function setLocale(locale: Locale): void {
      state.i18n.locale = locale;
    }

    function changeLanguage(locale: Locale): void {
      setLocale(locale);
      toggleDialog();
    }

    return {
      changeLanguage,
      Locale,
      state,
      toggleDialog,
      ...useI18n(),
    };
  },
});
