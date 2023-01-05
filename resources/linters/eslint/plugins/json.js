/**
	*  ESLint → Plugins → JSON
	*  @link https://github.com/azeemba/eslint-plugin-json Documentation.
 */

module.exports = {
	"plugins": ["json"],
	"rules": {
		"json/*": ["error", { "allowComments": true }]
	}
};
