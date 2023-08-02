/**
 *  TailwindCSS::Theme::Typography::Configuration
 *  @see https://tailwindcss.com/docs/animation
 *  @see https://tailwindcss.com/docs/blur
 */

const glob = require('glob');
const path = require('path');

const typographyConfig = {
	name: 'typography',
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
		let chunk = require(path.resolve(file));
		if ((chunk.theme) && (Object.keys(chunk.theme).length !== 0)) {
			Object.assign(typographyConfig.theme, chunk.theme);
		}

		if ((chunk.variants) && (Object.keys(chunk.variants).length !== 0)) {
			Object.assign(typographyConfig.variants, chunk.variants);
		}
	}
});

module.exports = typographyConfig;
