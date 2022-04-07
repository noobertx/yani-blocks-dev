const path = require('path');
const glob = require('glob');

// const frontendFiles = glob.sync('./src/frontend/blocks/*/index.js');
const EditorFiles = glob.sync('./src/blocks/*/index.js');

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
	output: {
		path: path.resolve(__dirname, 'assets/blocks'),
		filename: '[name]'
	},
	devtool: false,
	watch: 'production' !== process.env.NODE_ENV,
	stats: 'minimal',
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader'
				}
			}
		]
	},
	resolve: {
		alias: {
			GetwidUtils: path.resolve(__dirname, 'src/utils/'),
		}
	}
};

module.exports = buildEditorSeparateFiles;
