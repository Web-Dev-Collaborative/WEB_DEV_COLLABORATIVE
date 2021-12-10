const {
  RADII_PROPS,
  BORDER_PROPS,
  SPACING_PROPS,
  ALLOWED_VALUES,
} = require('../../utils/token-props');
const { tokensByCategory } = require('../../utils/token-utils');

const SPACING_NAMES = new Set(tokensByCategory('spacings').map(x => x.name));
const RADII_NAMES = new Set(tokensByCategory('radii').map(x => x.name));
const BORDER_NAMES = new Set(tokensByCategory('borders').map(x => x.name));

function isLengthProp(prop) {
  return (
    SPACING_PROPS.includes(prop) ||
    RADII_PROPS.includes(prop) ||
    BORDER_PROPS.includes(prop)
  );
}

function isBpkToken(value) {
  return (
    SPACING_NAMES.has(value) ||
    RADII_NAMES.has(value) ||
    BORDER_NAMES.has(value)
  );
}

// Checking if value is one of the allowed values
function isAllowedValue(value) {
  return ALLOWED_VALUES.includes(value);
}

// As there is no substitue in Bpk Tokens if using % then we can not throw an error
function isAllowedUnit(unit) {
  return unit === '%';
}

// Check if value is custom variable or is a negative number
function checkValue(value) {
  return value.startsWith('$') || value.startsWith('-');
}

module.exports.isLengthProp = isLengthProp;
module.exports.isBpkToken = isBpkToken;
module.exports.isAllowedValue = isAllowedValue;
module.exports.isAllowedUnit = isAllowedUnit;
module.exports.checkValue = checkValue;
