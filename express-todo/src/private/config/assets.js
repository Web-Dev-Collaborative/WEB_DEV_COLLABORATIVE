var settings = require('./settings');

module.exports = function(assets) {
  assets.root = settings.paths.public;
  assets.addJs('/js/**.js');
}