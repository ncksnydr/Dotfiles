/**
 *  TailwindCSS::Theme::Effects::Configuration
 *  @see https://tailwindcss.com/docs/animation
 *  @see https://tailwindcss.com/docs/blur
 */

const glob = require('glob');
const path = require('path');
const buildThemeConfig = require('./../../methods/buildThemeConfig');
const config = {
	theme: {},
	themeExtends: {},
	variants: {},
	variantsExtends: {}
};




glob.sync('./*.js').forEach(function(file) {

	if (file !== './index.js') {


		let chunk = require(path.resolve(file));

		if ((chunk.theme) && (Object.keys(chunk.theme).length !== 0)) {
			Object.assign(effectsConfig.theme, chunk.theme);
		}

		if ((chunk.variants) && (Object.keys(chunk.variants).length !== 0)) {
			Object.assign(effectsConfig.variants, chunk.variants);
		}
	}
});

module.exports = effectsConfig;
