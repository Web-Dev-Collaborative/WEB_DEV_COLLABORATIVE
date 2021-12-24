var productLoaders = [{
  test: /\.es$/,
  exclude: /node_modules/,
  loader: 'babel',
  query: {
    presets: ['es2015', 'es2016', 'es2017'],
  },
}, {
  test: /\.json$/,
  loader: 'json',
}];

var testLoaders = productLoaders.concat([{
  test: /\.es$/,
  include: 'src',
  loader: 'isparta',
}]);

module.exports = [{
  entry: './index.es',
  output: {
    path: 'dist/',
    filename: 'iframe-driver.js',
    library: 'iframe-driver',
    libraryTarget: 'amd',
  },
  externals: /^[a-z\-0-9\/]+$/,
  module: {
    loaders: productLoaders,
  },
}, {
  entry: './speclist.es',
  output: {
    path: 'dist/',
    filename: 'iframe-driver-test.js',
    library: 'iframe-driver-test',
    libraryTarget: 'amd',
  },
  externals: null,
  module: {
    loaders: testLoaders,
  },
}];