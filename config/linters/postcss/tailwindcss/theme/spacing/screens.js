/**
 *  TailwindCSS::Theme::Spacing::Screens
 * @see https://tailwindcss.com/docs/breakpoints
 */

const convertToRem = require('../../methods/convertToRem');
const breakpointsDefault = {
	sm: 640,
	md: 768,
	lg: 1024,
	xl: 1280
};

let buildScreenObj = (breakpoints) => {
	let obj = {};
	Object.keys(breakpoints).forEach(key => {
		obj[key] = convertToRem(breakpoints[key]);
	});
	return obj;
};

module.exports = {
	theme: {
		screens: buildScreenObj(breakpointsDefault),
		extend: {}
	},
	variants: {
		extend: {}
	}
};
