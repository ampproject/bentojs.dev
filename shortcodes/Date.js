const dayjs = require('dayjs');

const defaultFormat = 'MMMM DD, YYYY';

function dateFilter(date, format = defaultFormat) {
  return dayjs(date).format(format);
}

module.exports = dateFilter;
