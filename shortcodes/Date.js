const {DateTime} = require('luxon');

const defaultFormat = DateTime.DATE_FULL;

function dateFilter(date, format = defaultFormat) {
  return DateTime.fromJSDate(date).toLocaleString(format);
}

module.exports = dateFilter;
