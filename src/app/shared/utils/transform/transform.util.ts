import { format as fnsFormat } from 'date-fns';
import { id } from 'date-fns/locale';

import { DEFAULT_DATE_FORMAT } from './transform.constant';

export function numberSeparator(amount: number | string): string {
  const isString = typeof amount === 'string';
  const isNumber = typeof amount === 'number';
  const isValidAmount = isString || isNumber;

  if (!amount || !isValidAmount) {
    return '0';
  }

  const validAmount = isString ? Number(amount) : (amount as number);

  return isNaN(validAmount) ? '0' : `${validAmount.toLocaleString('id-ID')}`;
}

export function formatDate(
  date: Date | string,
  format: string = DEFAULT_DATE_FORMAT,
): string {
  const newDate = new Date(date);
  const isValidDate = date && !isNaN(newDate.getTime());

  if (!isValidDate) {
    return '-';
  }

  return fnsFormat(newDate, format, { locale: id });
}
