/**
 *  ESLint → Rules → Suggestions
 *  @link https://eslint.org/docs/latest/rules/#suggestions Documentation
 */

module.exports = {
	"accessor-pairs": [
		"error"
	],
	"arrow-body-style": [
		"error",
		"always"
	],
	"block-scoped-var": "error",
	"camelcase": [
		"error",
		{
			"properties": "never",
			"ignoreImports": true
		}
	],
	"capitalized-comments": "error",
	"class-methods-use-this": "error",
	"complexity": [
		"error",
		3
	],
	"consistent-return": "error",
	"consistent-this": [
		"error",
		"self"
	],
	"curly": [
		"error",
		"multi-line",
		"consistent"
	],
	"default-case": "error",
	"default-case-last": "error",
	"default-param-last": "error",
	"dot-notation": [
		"error",
		{"allowKeywords": false}
	],
	"eqeqeq": [
		"error",
		"always"
	],
	"func-name-matching": "off",
	"func-names": [
		"error",
		"always"
	],
	"func-style": [
		"error",
		"expression"
	],
	"grouped-accessor-pairs": "off",
	"guard-for-in": "error",
	"id-denylist": [
		"error",
		"data",
		"err",
		"e",
		"cb",
		"callback"
	],
	"id-length": [
		"error",
		{
			"min": 3,
			"properties": "never",
			"exceptions": [
				"x",
				"y",
				"i"
			]
		}
	],
	"id-match": "off",
	"init-declarations": [
		"error",
		"always"
	],
	"logical-assignment-operators": "off",
	"max-classes-per-file": [
		"error",
		3
	],
	"max-depth": [
		"error",
		3
	],
	"max-lines": "off",
	"max-lines-per-function": "off",
	"max-nested-callbacks": [
		"error",
		3
	],
	"max-params": [
		"error",
		3
	],
	"max-statements": "off",
	"multiline-comment-style": [
		"error",
		"starred-block"
	],
	"new-cap": [
		"error",
		{
			"newIsCap": true,
			"capIsNew": true,
			"properties": false
		}
	],
	"no-alert": "error",
	"no-array-constructor": "error",
	"no-bitwise": "error",
	"no-caller": "off",
	"no-case-declarations": "error",
	"no-confusing-arrow": [
		"error"
	],
	"no-console": [
		"warn"
	],
	"no-continue": "error",
	"no-delete-var": "error",
	"no-div-regex": "off",
	"no-else-return": [
		"error",
		{"allowElseIf": true}
	],
	"no-empty": "error",
	"no-empty-function": "error",
	"no-empty-static-block": "error",
	"no-eq-null": "error",
	"no-eval": "error",
	"no-extend-native": "error",
	"no-extra-bind": "error",
	"no-extra-boolean-cast": "error",
	"no-extra-label": "error",
	"no-extra-semi": "error",
	"no-floating-decimal": "error",
	"no-global-assign": "error",
	"no-implicit-coercion": [
		"error",
		{
			"boolean": true,
			"string": true,
			"disallowTemplateShorthand": true
		}
	],
	"no-implicit-globals": "error",
	"no-implied-eval": "error",

	"no-inline-comments": "error",
	"no-invalid-this": "error",
	"no-iterator": "off",
	"no-label-var": "error",
	"no-labels": "error",
	"no-lone-blocks": "error",
	"no-lonely-if": "error",
	"no-loop-func": "error",
	"no-magic-numbers": "warn",
	"no-mixed-operators": "off",
	"no-multi-assign": "error",
	"no-multi-str": "error",
	"no-negated-condition": "error",
	"no-nested-ternary": "error",
	"no-new": "off",
	"no-new-func": "error",
	"no-new-object": "error",
	"no-new-wrappers": "error",
	"no-nonoctal-decimal-escape": "off",
	"no-octal": "error",
	"no-octal-escape": "error",
	"no-param-reassign": "off",
	"no-plusplus": "off",
	"no-proto": "error",
	"no-redeclare": "error",
	"no-regex-spaces": "error",
	"no-restricted-exports": "off",
	"no-restricted-globals": "off",
	"no-restricted-imports": "off",
	"no-restricted-properties": "off",
	"no-restricted-syntax": "off",
	"no-return-assign": "off",
	"no-return-await": "error",
	"no-script-url": "warn",
	"no-sequences": "error",
	"no-shadow": "error",
	"no-shadow-restricted-names": "error",
	"no-ternary": "off",
	"no-throw-literal": "warn",
	"no-undef-init": "off",
	"no-undefined": "off",
	"no-underscore-dangle": [
		"error",
		{
			"allowAfterThis": true,
			"allowAfterThisConstructor": true
		}
	],
	"no-unneeded-ternary": "off",
	"no-unused-expressions": "off",
	"no-unused-labels": "off",
	"no-useless-call": "error",
	"no-useless-catch": "error",
	"no-useless-computed-key": "error",
	"no-useless-concat": "error",
	"no-useless-constructor": "error",
	"no-useless-escape": "error",
	"no-useless-rename": "warn",
	"no-useless-return": "error",
	"no-var": "error",
	"no-void": "off",
	"no-warning-comments": "off",
	"no-with": "error",
	"object-shorthand": [
		"error",
		"consistent"
	],
	"one-var": "off",
	"one-var-declaration-per-line": "off",
	"operator-assignment": [
		"error",
		"always"
	],
	"prefer-arrow-callback": "error",
	"prefer-const": "error",
	"prefer-destructuring": "off",
	"prefer-exponentiation-operator": "off",
	"prefer-named-capture-group": "off",
	"prefer-numeric-literals": "error",
	"prefer-object-has-own": "warn",
	"prefer-object-spread": "error",
	"prefer-promise-reject-errors": "off",
	"prefer-regex-literals": "off",
	"prefer-rest-params": "off",
	"prefer-spread": "off",
	"prefer-template": "error",
	"quote-props": [
		"error",
		"consistent-as-needed",
		{"keywords": true}
	],
	"radix": "off",
	"require-await": "off",
	"require-unicode-regexp": "off",
	"require-yield": "off",
	"sort-imports": [
		"error",
		{
			"ignoreCase": false,
			"ignoreDeclarationSort": false,
			"ignoreMemberSort": false,
			"memberSyntaxSortOrder": [
				"none",
				"all",
				"multiple",
				"single"
			],
			"allowSeparatedGroups": false
		}
	],
	"sort-keys": [
		"error",
		"asc",
		{
			"caseSensitive": true,
			"natural": true,
			"minKeys": 2
		}
	],
	"sort-vars": [
		"error",
		{"ignoreCase": true}
	],
	"spaced-comment": [
		"error",
		"always"
	],
	"strict": "off",
	"symbol-description": "error",
	"vars-on-top": "error",
	"yoda": "error"
};
