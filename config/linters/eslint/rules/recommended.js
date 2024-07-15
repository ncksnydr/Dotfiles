/**
 * --------------------------------------------------------------------------
 *   Linters → ESLint → Rules → Recommended
 *   @see https://eslint.org/docs/latest/rules
 * --------------------------------------------------------------------------
*/
module.exports = {
	root: true,
	extends: ["eslint:recommended"],
	env: {
		browser: true,
		es2022: true,
		commonjs: true
	},
	parserOptions: {
		ecmaVersion: "latest",
		sourceType: "module"
	}
};
