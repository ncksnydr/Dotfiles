/**
 *  TailwindCSS::Theme::Spacing
 * @see https://tailwindcss.com/docs/customizing-spacing
 */

const generateSpacing = require('./../../methods/generateSpacing');
const spacing = generateSpacing(3, 300, {});

module.exports = {
	theme: {
		spacing: spacing,
		extend: {}
	},
	variants: {
		extend: {}
	}
};
