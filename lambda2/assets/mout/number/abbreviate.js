"use strict";
exports.__esModule = true;
var enforcePrecision_1 = require("./enforcePrecision");
var _defaultDict = {
    thousand: 'K',
    million: 'M',
    billion: 'B'
};
/**
 * Abbreviate number if bigger than 1000. (eg: 2.5K, 17.5M, 3.4B, ...)
 */
function abbreviateNumber(val, nDecimals, dict) {
    nDecimals = nDecimals != null ? nDecimals : 1;
    dict = dict || _defaultDict;
    val = enforcePrecision_1["default"](val, nDecimals);
    var str;
    var mod;
    if (val < 1000000) {
        mod = enforcePrecision_1["default"](val / 1000, nDecimals);
        // might overflow to next scale during rounding
        str = mod < 1000 ? mod + dict.thousand : 1 + dict.million;
    }
    else if (val < 1000000000) {
        mod = enforcePrecision_1["default"](val / 1000000, nDecimals);
        str = mod < 1000 ? mod + dict.million : 1 + dict.billion;
    }
    else {
        str = enforcePrecision_1["default"](val / 1000000000, nDecimals) + dict.billion;
    }
    return str;
}
exports["default"] = abbreviateNumber;
