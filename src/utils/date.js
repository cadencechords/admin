import dayjs from 'dayjs';

export function format({ date, format }) {
  if (!date || !format) return '';

  return dayjs(date).format(format);
}
