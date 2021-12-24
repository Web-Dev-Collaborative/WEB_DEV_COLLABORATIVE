'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createConnector = require('../core/createConnector');

var _createConnector2 = _interopRequireDefault(_createConnector);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * connectPoweredBy connector provides the logic to build a widget that
 * will display a link to algolia.
 * @name connectPoweredBy
 * @kind connector
 * @providedPropType {string} url - the url to redirect to algolia
 */
exports.default = (0, _createConnector2.default)({
  displayName: 'AlgoliaPoweredBy',

  propTypes: {},

  getProvidedProps: function getProvidedProps(props) {
    var url = 'https://www.algolia.com/?' + 'utm_source=react-instantsearch&' + 'utm_medium=website&' + ('utm_content=' + (props.canRender ? location.hostname : '') + '&') + 'utm_campaign=poweredby';
    return { url: url };
  }
});