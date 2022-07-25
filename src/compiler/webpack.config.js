const fs = require('fs');
const path = require('path');
const webpack = require('webpack');

const MiniCssExtractWebpackPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin').CleanWebpackPlugin;
const NonJsEntryCleanupPlugin = require('./non-js-entry-cleanup-plugin');
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');

const { context, entry, devtool, outputFolder, publicFolder } = require('../config');

const HMR = require('./hmr');
const getPublicPath = require('./publicPath');

module.exports = ({ dev }) => {
  const hmr = HMR.getClient();

  return {
    mode: dev ? 'development' : 'production',
    // devtool: dev ?  devtool : false,
		devtool,
    context,
    entry: {
      'css/style': dev ? [hmr, entry.styles] : entry.styles,
      'js/app': dev ? [hmr, entry.scripts] : entry.scripts,
    },
    output: {
      path: outputFolder,
      publicPath: getPublicPath(publicFolder),
      filename: '[name].js'
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /(node_modules|bower_components)\/(?!(dom7|ssr-window|swiper)\/).*/,
          use: [
            // ...(dev ? [{ loader: 'cache-loader' }] : []),
            { loader: 'babel-loader' }
          ]
        },
        {
          test: /\.(sa|sc|c)ss$/,
          use: [
            ...(dev ? [{ loader: 'cache-loader' }, { loader: 'style-loader' }] : [MiniCssExtractWebpackPlugin.loader]),
            {
							loader: 'css-loader',
							options: {
								sourceMap: true
							},
						},
            {
							loader: 'postcss-loader',
							options: {
								sourceMap: true
							},
						},
            {
							loader: 'resolve-url-loader',
							options: {
								sourceMap: true
							},
						},
            {
							loader: 'sass-loader',
							options: {
								sourceMap: true
							},
						},
          ]
        },
        {
          test: /\.(ttf|otf|eot|woff2?|png|jpe?g|gif|svg|ico|mp4|webm)$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: 'fonts/[name].[ext]',
              }
            }
          ]
        }
      ]
    },
    plugins: [
      ...(dev ? [
        new webpack.HotModuleReplacementPlugin(),
        new FriendlyErrorsWebpackPlugin(),
      ] : [
        new MiniCssExtractWebpackPlugin({
          filename: '[name].css'
        }),

        new NonJsEntryCleanupPlugin({
          context: 'css',
          extensions: 'js',
          includeSubfolders: true
        }),

				/**
				 * Removes/cleans build folders and unused assets when rebuilding
				 * @see https://github.com/johnagan/clean-webpack-plugin#options-and-defaults-optional
				 */
        new CleanWebpackPlugin(),

				/**
				 * Copies files from target to destination folder
				 * @see https://webpack.js.org/plugins/copy-webpack-plugin/
				 */
        new CopyWebpackPlugin({
					patterns: [
						{
            	from: `${context}/**/*`,
          	  to: outputFolder,
							filter: async (resourcePath) => {
								const toIgnore = [ '.js', '.ts', '.sass', '.scss', '.css' ];
								const extension = path.extname(resourcePath);
								return (toIgnore.indexOf(extension) <= -1);
							},
         	 },
					],
				})
      ])
    ]
  }
}
