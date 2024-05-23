/**
 *  Stylelint → Rules → Enforce conventions → Notation
 *  @see https://stylelint.io/user-guide/rules#notation
 */

module.exports = {
	rules: {
		'alpha-value-notation': 'number',
		'color-function-notation': 'legacy',
		'color-hex-length': 'long',
		'font-weight-notation': ['numeric', {
			ignore: ['relative']
		}],
		'hue-degree-notation': 'number',
		'import-notation': 'string',
		'keyframe-selector-notation': 'percentage-unless-within-keyword-only-block',
		'media-feature-range-notation': 'prefix',
		'selector-not-notation': 'simple',
		'selector-pseudo-element-colon-notation': 'double'
	}
};
