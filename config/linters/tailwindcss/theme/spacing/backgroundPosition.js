/**
 *  TailwindCSS::Theme::Spacing::Background position
 * @see https://tailwindcss.com/docs/background-position
 */

const backgroundPosition = {};

module.exports = {
	theme: {
		extend: {
			backgroundPosition: backgroundPosition
		}
	},
	variants: {
		extend: {
			backgroundPosition: ['hover', 'focus']
		}
	}
};
