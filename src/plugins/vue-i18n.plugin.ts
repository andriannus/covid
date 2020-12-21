import { createI18n } from 'vue-i18n-composable';

import { Locale } from '@/app/shared/enums/i18n.enum';
import { en } from '@/assets/lang/en';
import { id } from '@/assets/lang/id';

export const i18n = createI18n({
  locale: Locale.BahasaIndonesia,
  messages: {
    [Locale.English]: en,
    [Locale.BahasaIndonesia]: id,
  },
});
