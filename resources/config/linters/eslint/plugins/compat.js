/**
 *  ESLint → Plugins → Compat
 *  @see https://github.com/amilajack/eslint-plugin-compat
 */

module.exports = {
	plugins: ["compat"],
	extends: ["plugin:compat/recommended"],
	env: {
		browser: true
	}
};
