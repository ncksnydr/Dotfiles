/**
 *  Stylelint → Rules → Avoid errors → Unknown
 *  @see https://stylelint.io/user-guide/rules/#unknown
 */

module.exports = {
	rules: {
		'annotation-no-unknown': true,
		'at-rule-no-unknown': true,
		'declaration-property-value-no-unknown': null,
		'function-no-unknown': null,
		'media-feature-name-no-unknown': null,
		'no-unknown-animations': true,
		'no-unknown-custom-properties': true,
		'property-no-unknown': true,
		'selector-pseudo-class-no-unknown': true,
		'selector-pseudo-element-no-unknown': true,
		'selector-type-no-unknown': null,
		'unit-no-unknown': true
	}
};
