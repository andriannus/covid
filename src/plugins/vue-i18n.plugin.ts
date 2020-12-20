import { createI18n } from 'vue-i18n-composable';

import { en } from '@/assets/lang/en';
import { id } from '@/assets/lang/id';

export const i18n = createI18n({
  locale: 'id',
  messages: { en, id },
});
