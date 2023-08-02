/**
 *  Stylelint → Rules → Enforce conventions → Max and min
 *  @see https://stylelint.io/user-guide/rules/#max--min
 */

module.exports = {
	rules: {
		'declaration-block-single-line-max-declarations': 1,
		'declaration-property-max-values': null,
		'max-nesting-depth': 2,
		'number-max-precision': 3,
		'selector-max-attribute': 2,
		'selector-max-class': 2,
		'selector-max-combinators': 3,
		'selector-max-compound-selectors': 3,
		'selector-max-id': 1,
		'selector-max-pseudo-class': 3,
		'selector-max-specificity': null,
		'selector-max-type': null,
		'selector-max-universal': null,
		'time-min-milliseconds': null
	}
};
