module.exports = {
  context: 'assets',
  entry: {
    styles: './sass/main.scss',
    scripts: './js/main.js'
  },
  devtool: 'cheap-module-eval-source-map',
  outputFolder: '../assets',
  publicFolder: 'assets',
  proxyTarget: 'http://savytech.local',
  watch: [
    '../**/*.php'
  ]
}
