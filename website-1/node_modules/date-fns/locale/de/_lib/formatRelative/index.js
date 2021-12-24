'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = formatRelative;
var formatRelativeLocale = {
  lastWeek: '[letzten] dddd [um] LT',
  yesterday: '[gestern um] LT',
  today: '[heute um] LT',
  tomorrow: '[morgen um] LT',
  nextWeek: 'dddd [um] LT',
  other: 'L'
};

function formatRelative(token, date, baseDate, options) {
  return formatRelativeLocale[token];
}
module.exports = exports['default'];