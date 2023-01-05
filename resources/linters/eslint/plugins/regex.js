/**
	*  ESLint → Plugins → RegEx
	*  @link https://www.npmjs.com/package/eslint-plugin-regex Documentation.
 */

module.exports = {
	"plugins": [
		"regex"
	],
	"rules": {
		"regex/invalid": [
			"error", [
				"invalidRegex1",
				"invalidRegexN"
			]
		],
		"regex/required": [
			"error", [
				"requiredRegex1",
				"requiredRegexN"
			],
			"ignoreFilesRegex"
		]
	}
};
