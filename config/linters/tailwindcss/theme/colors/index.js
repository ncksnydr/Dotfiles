/**
 *  TailwindCSS::Theme::Colors
 * @see https://tailwindcss.com/docs/customizing-colors
 */


module.exports = {
	theme: {
		colors: {
			...require('./defaultColors'),
			...require('./customColors')
		}
	},
	themeExtends: {
		colors: {
			...require('./companyBrandColors')
		}
	},
	variants: {},
	variantsExtends: {}
};
