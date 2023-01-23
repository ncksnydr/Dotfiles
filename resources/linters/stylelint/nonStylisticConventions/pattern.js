/**
	*  Stylelint → Enforce Non-Stylistic Conventions → Pattern
	*  @link https://stylelint.io/user-guide/rules/#pattern Documentation.
 */

module.exports = {
	"rules": {
		"alpha-value-notation": "percentage",
		"color-function-notation": "legacy",
		"color-hex-length": "short",
		"font-weight-notation": "numeric",
		"hue-degree-notation": "angle",
		"import-notation": "string",
		"keyframe-selector-notation": "keyword",
		"media-feature-range-notation": "prefix",
		"selector-not-notation": "simple",
		"selector-pseudo-element-colon-notation": "double",
		"selector-nested-pattern": true
	}
};
