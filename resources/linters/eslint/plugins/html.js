/**
	*  ESLint → Plugins → HTML
	*  @link https://github.com/yeonjuan/html-eslint Documentation.
 */

module.exports = {
	plugins: ["@html-eslint"],
	overrides: [
		{
			files: ["*.html"],
			parser: "@html-eslint/parser",
			extends: ["plugin:@html-eslint/recommended"]
		}
	]
};
