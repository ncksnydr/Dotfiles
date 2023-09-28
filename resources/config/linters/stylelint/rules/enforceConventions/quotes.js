/**
 *  Stylelint → Rules → Enforce conventions → Quotes
 *  @see https://stylelint.io/user-guide/rules#quotes
 */

module.exports = {
	rules: {
		'font-family-name-quotes': 'always-where-required',
		'function-url-quotes': ['always', {
			except: ['empty']
		}],
		'selector-attribute-quotes': 'always'
	}
};
