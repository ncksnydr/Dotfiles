/**
 *  TailwindCSS::Theme::Spacing::Z Index
 * @see https://tailwindcss.com/docs/z-index
 */

let zIndexDefaults = {
	auto: 'auto',
	0: '0',
};

const zIndex = () => {
	const obj = { ...zIndexDefaults };
	for (const i = 0; i <= 9999; i++) {
		if ((i <= 30) || (i % 10 === 0)) {
			obj[i] = i;
		}
	}
	return obj;
}

module.exports = {
	theme: {
		zIndex: zIndex,
		extend: {}
	},
	variants: {
		extend: {}
	}
}
