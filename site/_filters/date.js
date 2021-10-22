const {DateTime} = require('luxon');

function dateFilter(date, format = DateTime.DATE_FULL) {
  return DateTime.fromJSDate(date).toLocaleString(format);
}

module.exports = dateFilter;
