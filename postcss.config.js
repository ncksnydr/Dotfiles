/**
 *  PostCSS::Configuration file
 *  @see https://cssnano.co/docs/config-file
 *  @see https://github.com/postcss/autoprefixer
 *  @see https://github.com/yunusga/postcss-sort-media-queries
 *  @see https://github.com/TCotton/postcss-mq-keyframes
 *  @see https://github.com/csstools/postcss-input-range
 *  @see https://github.com/postcss/postcss-easings
 *  @see https://github.com/larsenwork/postcss-easing-gradients
 *  @see https://github.com/azat-io/postcss-instagram
 *  @see https://github.com/2createStudio/postcss-sprites
 *  @see https://github.com/iamstarkov/postcss-color-mix
 *  @see https://tailwindcss.com/
 *  @see https://github.com/postcss/postcss-import
 *  @see https://github.com/dimitrinicolas/postcss-import-ext-glob
 */

const cssNanoRules = {
	...require("./resources/linters/postcss/plugins/cssnano/globals.js"),
	...require("./resources/linters/postcss/plugins/cssnano/production.js")
}

const easingGradientsOptions = require("./resources/linters/postcss/plugins/easing-gradients.js");

module.exports = {
	plugins: [
		/** --- Plugin::Import ------ */
		require("postcss-import"),

		/** --- Plugin::Import glob ------ */
		require("postcss-import-ext-glob"),

		/** --- Plugin::TailwindCSS ------ */
		require("tailwindcss"),

		/** --- Plugin::Color mix ------ */
		require("postcss-color-mix"),

		/** --- Plugin::Input styles ------ */
		require("postcss-input-range"),

		/** --- Plugin::Instagram ------ */
		require("postcss-instagram"),

		/** --- Plugin::Easings ------ */
		require("postcss-easings"),

		/** --- Plugin::Easing gradients ------ */
		require("postcss-easing-gradients")(easingGradientsOptions),

		/** --- Plugin::Process media query keyframes ------ */
		require("postcss-mq-keyframes"),

		/** --- Plugin::Sort media queries ------ */
		require("postcss-sort-media-queries"),

		/** --- Plugin::Autoprefixer ------ */
		require("autoprefixer"),

		/** --- Plugin::CSSNano ------ */
		require("cssnano")({
			preset: ["advanced", cssNanoRules]
		})
	]
};



