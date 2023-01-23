/**
	*  Stylelint → Enforce Non-Stylistic Conventions → Allowed, Disallowed, and Required.
	*  @link https://stylelint.io/user-guide/rules/#allowed-disallowed--required Documentation.
 */

module.exports = {
	"rules": {
		"at-rule-no-vendor-prefix": true,
		"at-rule-property-required-list": true,
		"color-hex-alpha": "never",
		"color-named": "never",
		"color-no-hex": false,
		"declaration-no-important": true,
		"function-url-no-scheme-relative": true,
		"length-zero-no-unit": true,
		"media-feature-name-disallowed-list": ["max-width"],
		"media-feature-name-no-vendor-prefix": true,
		"property-no-vendor-prefix": true,
		"selector-no-qualifying-type": true,
		"selector-no-vendor-prefix": true,
		"value-no-vendor-prefix": true
	}
};
