/**
	*  Stylelint → Enforce Non-Stylistic Conventions → Max and Min
	*  @link https://stylelint.io/user-guide/rules/#max--min Documentation.
 */

module.exports = {
	"rules": {
		"declaration-block-single-line-max-declarations": 1,
		"max-nesting-depth": [3, {
			"ignore": ["pseudo-classes"]
		}],
		"number-max-precision": 3,
		"selector-max-id": 1,
		"selector-max-pseudo-class": 3,
		"selector-max-universal": 1
	}
};
