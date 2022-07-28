module.exports = ({ options }) => ({
  plugins: {

		// To inline @import rules content
    // with extra features.
		'postcss-easy-import': {
      partial: true,
      extensions: ['.sass', '.scss', '.css'],
      glob: true,
    },

    // To parse CSS and add vendor prefixes to CSS rules using
    // values from `Can I Use`. It is recommended by Google and
    // used in Twitter and Alibaba.
    'autoprefixer': {},

		// Convert modern CSS into something most browsers can
		// understand, determining the polyfills you need based on
		// your targeted browsers or runtime environments.
    'postcss-preset-env': {},

    // Minify css on production
    'cssnano': options.dev ? false : {
      preset: ['default', {
        discardComments: { removeAll: true }
      }]
    }
  }
});
