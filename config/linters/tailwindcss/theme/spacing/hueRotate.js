/**
 *  TailwindCSS::Theme::Spacing::Background
 * @see https://tailwindcss.com/docs/customizing-spacing
 */

const hueRotate = () => {
	const obj = {};
	for (const i = 0; i <= 180; i++) {
		obj[i] = i + 'deg';
		obj['-' + i] = '-' + i + 'deg';
	}
	return obj;
}

module.exports = {
	name: '',
	theme: {
		hueRotate,
		extend: {}
	},
	variants: {
		extend: {}
	}
};
