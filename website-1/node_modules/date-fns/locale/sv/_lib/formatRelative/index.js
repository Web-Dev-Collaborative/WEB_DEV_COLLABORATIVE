'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = formatRelative;
var formatRelativeLocale = {
  lastWeek: '[förra] dddd[en kl.] LT',
  yesterday: '[igår kl.] LT',
  today: '[idag kl.] LT',
  tomorrow: '[imorgon kl.] LT',
  nextWeek: 'dddd [kl.] LT',
  other: 'L'
};

function formatRelative(token, date, baseDate, options) {
  return formatRelativeLocale[token];
}
module.exports = exports['default'];