const format = require('./format.js');
const prevDay = require('./prevDay.js');
const prevMonth = require('./prevMonth.js');
const prevYear = require('./prevYear.js');
const nextDay = require('./nextDay.js');
const nextMonth = require('./nextMonth.js');
const nextYear = require('./nextYear.js');
const goto = require('./goto.js');
const calc = require('./calc.js');

module.exports.default = module.exports = {
  format,
  prevDay,
  prevMonth,
  prevYear,
  nextDay,
  nextMonth,
  nextYear,
  goto,
  calc
}