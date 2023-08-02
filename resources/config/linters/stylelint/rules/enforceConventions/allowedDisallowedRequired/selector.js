/**
 *  Stylelint → Rules → Enforce conventions → Allowed, disallowed, and required → Selector
 *  @see https://stylelint.io/user-guide/rules/#selector
 */

module.exports = {
	rules: {
		'selector-attribute-name-disallowed-list': null,
		'selector-attribute-operator-allowed-list': null,
		'selector-attribute-operator-disallowed-list': null,
		'selector-combinator-allowed-list': null,
		'selector-combinator-disallowed-list': null,
		'selector-disallowed-list': null,
		'selector-no-vendor-prefix': null,
		'selector-no-qualifying-type': [true, {
			ignore: ['attribute', 'class']
		}],
		'selector-pseudo-class-allowed-list': null,
		'selector-pseudo-class-disallowed-list': null,
		'selector-pseudo-element-allowed-list': null,
		'selector-pseudo-element-disallowed-list': null
	}
};
