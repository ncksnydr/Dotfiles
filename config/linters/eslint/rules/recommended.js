/**
 *  ESLint → Rules → Recommended
 *  @link https://eslint.org/docs/latest/rules/#possible-problems Documentation
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
