/**
 *  Stylelint → Rules → Enforce non-stylistic conventions
 *  @see https://stylelint.io/user-guide/rules#enforce-non-stylistic-conventions
 */

module.exports = {
	"rules": {
		"alpha-value-notation": "percentage",
		"at-rule-no-vendor-prefix": true,
		"color-function-notation": "legacy",
		"color-hex-alpha": "never",
		"color-hex-length": "short",
		"color-named": "never",
		"color-no-hex": true,
		"declaration-block-single-line-max-declarations": 1,
		"declaration-no-important": true,
		"font-family-name-quotes": "always-unless-keyword",
		"font-weight-notation": "numeric",
		"function-url-no-scheme-relative": true,
		"function-url-quotes": "always",
		"hue-degree-notation": "angle",
		"import-notation": "string",
		"keyframe-selector-notation": "keyword",
		"length-zero-no-unit": true,
		"max-nesting-depth": [3, {
			"ignore": ["pseudo-classes"]
		}],
		"media-feature-name-disallowed-list": ["max-width"],
		"media-feature-name-no-vendor-prefix": true,
		"media-feature-range-notation": "prefix",
		"number-max-precision": 3,
		"property-no-vendor-prefix": true,
		"selector-attribute-quotes": "always",
		"selector-max-id": 1,
		"selector-max-pseudo-class": 3,
		"selector-max-universal": 1,
		"selector-no-qualifying-type": true,
		"selector-no-vendor-prefix": true,
		"selector-not-notation": "simple",
		"selector-pseudo-element-colon-notation": "double",
		"shorthand-property-no-redundant-values": true,
		"value-no-vendor-prefix": true,
	}
};
