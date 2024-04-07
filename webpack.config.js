const config = {
	mode: 'production',
	entry: {
		index: './src/js/index.js'
		// contacts: './src/js/contacts.js',
		// about: './src/js/about.js',
	},
	output: {
		filename: '[name].bundle.js',
	},
	module: {
		rules: [
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader'],
			},
		],
	},

	mode: 'development',
    devtool: 'inline-source-map', // This will help with debugging
    entry: {
        index: './src/js/index.js'
        // contacts: './src/js/contacts.js',
        // about: './src/js/about.js',
    },
    output: {
        filename: '[name].bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
        ],
    },
    optimization: {
        minimize: false, // This will disable minification
    },
};

module.exports = config;
