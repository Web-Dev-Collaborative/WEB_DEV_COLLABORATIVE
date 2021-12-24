'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createConnector = require('../core/createConnector');

var _createConnector2 = _interopRequireDefault(_createConnector);

var _indexUtils = require('../core/indexUtils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * connectStats connector provides the logic to build a widget that will
 *  displays algolia search statistics (hits number and processing time).
 * @name connectStats
 * @kind connector
 * @providedPropType {number} nbHits - number of hits returned by Algolia.
 * @providedPropType {number} processingTimeMS - the time in ms took by Algolia to search for results.
 */
exports.default = (0, _createConnector2.default)({
  displayName: 'AlgoliaStats',

  getProvidedProps: function getProvidedProps(props, searchState, searchResults) {
    var results = (0, _indexUtils.getResults)(searchResults, this.context);

    if (!results) {
      return null;
    }
    return {
      nbHits: results.nbHits,
      processingTimeMS: results.processingTimeMS
    };
  }
});