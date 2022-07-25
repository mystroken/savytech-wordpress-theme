const path = require('path')

module.exports = {
  context: path.resolve(__dirname, 'assets'),
  entry: {
    styles: './sass/style.sass',
    scripts: './js/app.js',
  },
	/**
	 * @seee https://webpack.js.org/configuration/devtool/
	 */
  devtool: 'eval-source-map',

  outputFolder: path.resolve(__dirname, '../assets'),
  publicFolder: 'assets',
  proxyTarget: 'http://savytech.local',
  watch: [
    '../**/*.php'
  ]
}
