const path = require('path');
const webpack = require('webpack');
const browserSync = require('browser-sync').create();

const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');

const { publicFolder, proxyTarget, watch } = require('../config');
const webpackConfig = require('./webpack.config')({ dev: true });
const getPublicPath = require('./publicPath');

const compiler = webpack(webpackConfig);

const middleware = [
	// For use with webpack bundles and
	// allows for serving of the files emitted from webpack.
	// This should be used for development only.
  webpackDevMiddleware(compiler, {
    publicPath: getPublicPath(publicFolder),
		stats: { colors: true }
  }),

	// Webpack hot reloading using only webpack-dev-middleware.
	// This allows you to add hot reloading into
	// an existing server without webpack-dev-server.
  webpackHotMiddleware(compiler, {
		noInfo: true,
		publicPath: getPublicPath(publicFolder),
  })
];

browserSync.init({
	logLevel: 'debug',
  files: watch.map(element => path.resolve(element)),
	// Proxy an EXISTING vhost. Browsersync will
	// wrap your vhost with a proxy URL to view your site.
  proxy: {
		target: proxyTarget,
		middleware,
	},

	// Control how the snippet is injected
	// onto each page via a custom regex + function.
  snippetOptions: {
    rule: {
      match:  /<\/head>/i,
      fn: function(snippet, match) {
        return `<script src="${getPublicPath(publicFolder)}css/style.js"></script>${snippet}${match}`;
      }
    }
  }
});
