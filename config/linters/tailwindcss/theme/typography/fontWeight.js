/**
 *  TailwindCSS::Theme::Spacing::Background
 * @see https://tailwindcss.com/docs/customizing-spacing
 */


const fontWeightDefaults = {
	thin: '100',
	extralight: '200',
	light: '300',
	normal: '400',
	medium: '500',
	semibold: '600',
	bold: '700',
	extrabold: '800',
	black: '900'
};

module.exports = {
	theme: {
		fontWeight: fontWeightDefaults,
		extend: {}
	},
	variants: {
		extend: {}
	}
};
