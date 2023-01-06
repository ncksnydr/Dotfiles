/**
	*  ESLint → Plugins → Compatibility
	*  @link https://github.com/amilajack/eslint-plugin-compat Documentation.
 */

module.exports = {
	"plugins": ["compat"],
	"extends": ["plugin:compat/recommended"],
	"env": {
		"browser": true
	}
};