/**
 *  Stylelint → Rules → Configuration
 *  @see https://stylelint.io/user-guide/configure/
 */

module.exports = {
	"extends": [
		"stylelint-config-standard",
		"stylelint-config-prettier"
	],
	"overrides": [{
		"files": ["**/*.scss"],
		"customSyntax": "postcss-scss"
	}],
	"plugins": ["stylelint-prettier"],
	"rules": {
		"prettier/prettier": true
	}
};
