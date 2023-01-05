/**
	*  ESLint → Plugins → Deprecate
	*  @link https://github.com/AlexMost/eslint-plugin-deprecate Documentation.
 */

module.exports = {
	"plugins": ["deprecate"],
	"rules": {
		"deprecate/function": "error",
		"deprecate/member-expression": "error",
		"deprecate/import": "error"
	}
};