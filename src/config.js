const path = require('path')

module.exports = {
  context: path.resolve(__dirname, 'assets'),
  entry: {
    styles: './sass/style.sass',
    scripts: './js/app.js'
  },
  devtool: 'cheap-source-map',
  outputFolder: path.resolve(__dirname, '../assets'),
  publicFolder: 'assets',
  proxyTarget: 'http://savytech.local',
  watch: [
    '../**/*.php'
  ]
}
