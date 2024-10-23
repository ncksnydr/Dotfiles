/**
 *  TailwindCSS::Theme::Spacing::Background size
 * @see https://tailwindcss.com/docs/background-size
 */


const backgroundSize = {};

module.exports = {
	theme: {
		extend: {
			backgroundSize
		}
	},
	variants: {
		extend: {
			backgroundSize: ['hover', 'focus']
		}
	}
};
