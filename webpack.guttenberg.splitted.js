const path = require('path');
const glob = require('glob');

// const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// const frontendFiles = glob.sync('./src/frontend/blocks/*/index.js');
const EditorFiles = glob.sync('./src/blocks/*/index.js');
const webpack = require('webpack');

const frontendEntry = EditorFiles.reduce((entries, item) => {
	const name = item
		.replace('/index.js', '/block.js')
		.replace('./src/blocks/', '');

	entries[name] = item;
	return entries;
}, {});


const buildEditorSeparateFiles = {
  entry: { 
  	...frontendEntry
  },
  watch: true,
  watchOptions: {
    ignored: /node_modules/,
  },
  output: {
    path: path.resolve(__dirname, 'assets/blocks'),
	filename: '[name]',
	library: [ 'wp', '[name]' ],
	libraryTarget: 'window',
  },
  externals:{
  	'react': 'React',
	'react-dom': 'ReactDOM',
	'lodash': 'lodash',
	// https://www.cssigniter.com/importing-gutenberg-core-wordpress-libraries-es-modules-blocks/
	'wp.i18n': {
		window: [ 'wp', 'i18n' ]
	},
  },
  plugins: [  
  ],
  module: {
    rules: [
      
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ["babel-loader"]
      }
    ],
  },
};

module.exports = buildEditorSeparateFiles;
