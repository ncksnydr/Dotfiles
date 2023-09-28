/**
 *  TailwindCSS::Theme::Spacing::Configuration
 */

const glob = require('glob');
const path = require('path');

const spacingConfig = {
	name: 'spacing',
	theme: {
		extend: {}
	},
	variants: {
		extend: {}
	}
};

/** --- Loop through `./environment` directory and include all files. ------ */
glob.sync('./*.js').forEach(function(file) {


	if (file !== './index.js') {
		console.log(file);
		let chunk = require(path.resolve(file));




		if ((chunk.theme) && (Object.keys(chunk.theme).length !== 0)) {
			Object.assign(spacingConfig.theme, chunk.theme);
		}

		if ((chunk.theme.extend !== undefined) && (Object.keys(chunk.theme.extend).length !== 0)) {
			Object.assign(spacingConfig.theme.extend, chunk.theme.extend);
		}

		if ((chunk.variants) && (Object.keys(chunk.variants).length !== 0)) {
			Object.assign(spacingConfig.variants, chunk.variants);
		}

		if ((chunk.variants.extend) && (Object.keys(chunk.variants.extend).length !== 0)) {
			Object.assign(spacingConfig.variants.extend, chunk.variants.extend);
		}

	}
});

console.log(spacingConfig);

// module.exports = spacingConfig;


