/**
 *  ESLint → Plugins → Vue
 *  @see https://eslint.vuejs.org/rules/
 */

module.exports = {
	"extends": [
		"plugin:vue/vue3-recommended"
	],
	"plugins": [
		"vue"
	],
	"rules": {
		"vue/comment-directive": "error",
		"vue/experimental-script-setup-vars": "error",
		"vue/jsx-uses-vars": "error",
		"vue/no-arrow-functions-in-watch": "warn",
		"vue/no-async-in-computed-properties": "warn",
		"vue/no-deprecated-data-object-declaration": "warn",
		"vue/no-deprecated-destroyed-lifecycle": "warn",
		"vue/no-deprecated-dollar-listeners-api": "warn",
		"vue/no-deprecated-dollar-scopedslots-api": "warn",
		"vue/no-deprecated-events-api": "warn",
		"vue/no-deprecated-filter": "warn",
		"vue/no-deprecated-functional-template": "warn",
		"vue/no-deprecated-html-element-is": "warn",
		"vue/no-deprecated-props-default-this": "warn",
		"vue/no-deprecated-scope-attribute": "warn",
		"vue/no-deprecated-slot-attribute": "warn",
		"vue/no-deprecated-slot-scope-attribute": "warn",
		"vue/no-deprecated-v-bind-sync": "warn",
		"vue/no-deprecated-v-on-native-modifier": "warn",
		"vue/no-deprecated-v-on-number-modifiers": "warn",
		"vue/no-deprecated-vue-config-keycodes": "warn",
		"vue/no-dupe-keys": "error",
		"vue/no-dupe-v-else-if": "error",
		"vue/no-duplicate-attributes": "error",
		"vue/no-lifecycle-after-await": "error",
		"vue/no-mutating-props": "error",
		"vue/no-parsing-error": "error",
		"vue/no-ref-as-operand": "error",
		"vue/no-reserved-keys": "error",
		"vue/no-setup-props-destructure": "error",
		"vue/no-shared-component-data": "error",
		"vue/no-side-effects-in-computed-properties": "warn",
		"vue/no-template-key": "error",
		"vue/no-textarea-mustache": "error",
		"vue/no-unused-components": "error",
		"vue/no-unused-vars": "error",
		"vue/no-use-v-if-with-v-for": "error",
		"vue/no-v-for-template-key-on-child": "error",
		"vue/no-watch-after-await": "error",
		"vue/require-component-is": "error",
		"vue/require-prop-type-constructor": "error",
		"vue/require-render-return": "error",
		"vue/require-slots-as-functions": "error",
		"vue/require-toggle-inside-transition": "error",
		"vue/require-v-for-key": "error",
		"vue/require-valid-default-prop": "error",
		"vue/return-in-computed-property": "error",
		"vue/return-in-emits-validator": "error",
		"vue/use-v-on-exact": "warn",
		"vue/valid-template-root": "warn",
		"vue/valid-v-bind": "error",
		"vue/valid-v-cloak": "error",
		"vue/valid-v-else-if": "error",
		"vue/valid-v-else": "error",
		"vue/valid-v-for": "error",
		"vue/valid-v-html": "error",
		"vue/valid-v-if": "error",
		"vue/valid-v-is": "error",
		"vue/valid-v-model": "error",
		"vue/valid-v-on": "error",
		"vue/valid-v-once": "error",
		"vue/valid-v-pre": "error",
		"vue/valid-v-show": "error",
		"vue/valid-v-slot": "error",
		"vue/valid-v-text": "error",
		"vue/attribute-hyphenation": [
			"error",
			"always",
			{
				ignore: [
				]
			}
		],
		"vue/component-definition-name-casing": [
			"error",
			"PascalCase"
		],
		"vue/html-closing-bracket-newline": [
			"error",
			{
				singleline: "never",
				multiline: "always"
			}
		],
		"vue/html-closing-bracket-spacing": [
			"error",
			{
				startTag: "never",
				endTag: "never",
				selfClosingTag: "always"
			}
		],
		"vue/html-end-tags": "error",
		"vue/html-indent": [
			"warn",
			"tab",
			{
				attribute: 1,
				baseIndent: 1,
				closeBracket: 0,
				alignAttributesVertically: true,
				ignores: [
				]
			}
		],
		"vue/html-quotes": [
			"error",
			"double",
			{avoidEscape: false}
		],
		"vue/html-self-closing": [
			"error",
			{
				html: {
					"void": "never",
					"normal": "always",
					"component": "always"
				},
				svg: "always",
				math: "always"
			}
		],
		"vue/max-attributes-per-line": [
			"error",
			{
				singleline: {max: 1},
				multiline: {max: 2}
			}
		],
		"vue/multiline-html-element-content-newline": [
			"error",
			{
				ignoreWhenEmpty: true,
				allowEmptyLines: false
			}
		],
		"vue/mustache-interpolation-spacing": [
			"error",
			"always"
		],
		"vue/no-multi-spaces": [
			"error",
			{ignoreProperties: false}
		],
		"vue/no-spaces-around-equal-signs-in-attribute": [
			"error"
		],
		"vue/no-template-shadow": "error",
		"vue/one-component-per-file": "error",
		"vue/prop-name-casing": [
			"error",
			"camelCase"
		],
		"vue/require-default-prop": "error",
		"vue/require-explicit-emits": [
			"error",
			{allowProps: false}
		],
		"vue/require-prop-types": "error",
		"vue/singleline-html-element-content-newline": [
			"error",
			{
				ignoreWhenNoAttributes: true,
				ignoreWhenEmpty: true,
				ignores: [
				]
			}
		],
		"vue/v-bind-style": [
			"error",
			"shorthand"
		],
		"vue/v-on-style": [
			"error",
			"shorthand"
		],
		"vue/v-slot-style": [
			"error",
			{
				"atComponent": "shorthand",
				"default": "shorthand",
				"named": "shorthand"
			}
		],
		"vue/attributes-order": [
			"error",
			{alphabetical: true}
		],
		"vue/component-tags-order": [
			"error",
			{
				order: [
					"docs",
					"template",
					"script",
					"style"
				]
			}
		],
		"vue/no-lone-template": [
			"error",
			{ignoreAccessible: false}
		],
		"vue/no-multiple-slot-args": "warn",
		"vue/no-v-html": "error",
		"vue/order-in-components": "warn",
		"vue/this-in-template": [
			"error",
			"always"
		],
		"vue/block-tag-newline": "warn",
		"vue/component-name-in-template-casing": [
			"error",
			"PascalCase",
			{
				registeredComponentsOnly: true,
				ignores: [
				]
			}
		],
		"vue/custom-event-name-casing": [
			"error",
			"camelCase",
			{
				ignores: [
				]
			}
		],
		"vue/html-button-has-type": [
			"error",
			{
				button: true,
				submit: true,
				reset: true
			}
		],
		"vue/html-comment-content-newline": "warn",
		"vue/html-comment-indent": [
			"error",
			"tab"
		],
		"vue/match-component-file-name": [
			"error",
			{
				extensions: [
					"vue"
				],
				shouldMatchCase: false
			}
		],
		"vue/new-line-between-multi-line-property": [
			"error",
			{minLineOfMultilineProperty: 2}
		],
		"vue/next-tick-style": [
			"error",
			"promise"
		],
		"vue/no-bare-strings-in-template": [
			"error"
		],
		"vue/no-boolean-default": "error",
		"vue/no-duplicate-attr-inheritance": "error",
		"vue/no-empty-component-block": "error",
		"vue/no-invalid-model-keys": "error",
		"vue/no-multiple-objects-in-class": "error",
		"vue/no-potential-component-option-typo": "error",
		"vue/no-reserved-component-names": [
			"error",
			{
				disallowVueBuiltInComponents: false,
				disallowVue3BuiltInComponents: false
			}
		],
		"vue/no-restricted-block": "error",
		"vue/no-restricted-call-after-await": "error",
		"vue/no-restricted-component-options": "error",
		"vue/no-restricted-custom-event": "error",
		"vue/no-restricted-props": "error",
		"vue/no-restricted-static-attribute": "error",
		"vue/no-restricted-v-bind": "error",
		"vue/no-static-inline-styles": "error",
		"vue/no-template-target-blank": "error",
		"vue/no-unregistered-components": "error",
		"vue/no-unused-properties": "warn",
		"vue/no-unused-refs": "warn",
		"vue/no-useless-mustaches": "error",
		"vue/no-useless-v-bind": "error",
		"vue/padding-line-between-blocks": [
			"error",
			"always"
		],
		"vue/require-direct-export": "error",
		"vue/require-name-property": "error",
		"vue/script-indent": "error",
		"vue/sort-keys": [
			"warn",
			"asc",
			{
				caseSensitive: true,
				ignoreChildrenOf: [
					"model"
				],
				ignoreGrandchildrenOf: [
					"computed",
					"directives",
					"inject",
					"props",
					"watch"
				],
				minKeys: 2,
				natural: false
			}
		],
		"vue/static-class-names-order": "error",
		"vue/v-for-delimiter-style": [
			"error",
			"in"
		],
		"vue/v-on-event-hyphenation": [
			"error",
			"always",
			{
				autofix: false,
				ignore: [
				]
			}
		],
		"vue/v-on-function-call": [
			"error",
			"never"
		],
		"vue/valid-next-tick": "error"
	}
};
