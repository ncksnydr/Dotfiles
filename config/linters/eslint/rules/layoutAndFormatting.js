/**
 * --------------------------------------------------------------------------
 *   Linters → ESLint → Rules → Layout and Formatting
 *   @see https://eslint.org/docs/latest/rules/#layout--formatting
 * --------------------------------------------------------------------------
*/

module.exports = {
	"rules": {
		"array-bracket-newline": ["error", "always"],
		"array-bracket-spacing": [
			"error",
			"never"
		],
		"array-element-newline": [
			"error",
			"always",
			{
				"multiline": true,
				"minItems": 4
			}
		],
		"arrow-parens": [
			"error",
			"as-needed"
		],
		"arrow-spacing": [
			"error",
			{"before": true, "after": true}
		],
		"block-spacing": [
			"error",
			"always"
		],
		"brace-style": [
			"error",
			"1tbs",
			{"allowSingleLine": true}
		],
		"comma-dangle": [
			"error",
			{
				"arrays": "never",
				"objects": "never",
				"imports": "never",
				"exports": "never",
				"functions": "never"
			}
		],
		"comma-spacing": [
			"error",
			{"before": false, "after": true}
		],
		"comma-style": [
			"error",
			"last"
		],
		"computed-property-spacing": [
			"error",
			"never"
		],
		"dot-location": [
			"error",
			"property"
		],
		"eol-last": [
			"error",
			"always"
		],
		"func-call-spacing": [
			"error",
			"never"
		],
		"function-call-argument-newline": [
			"error",
			"consistent"
		],
		"function-paren-newline": [
			"error",
			{"minItems": 4}
		],
		"generator-star-spacing": [
			"error",
			{"before": true, "after": false}
		],
		"implicit-arrow-linebreak": [
			"error",
			"beside"
		],
		"indent": [
			"error",
			"tab"
		],
		"jsx-quotes": [
			"error",
			"prefer-double"
		],
		"key-spacing": [
			"error",
			{
				"beforeColon": false,
				"afterColon": true,
				"mode": "strict"

			}
		],
		"lines-between-class-members": [
			"error",
			"always"
		],
		"keyword-spacing": [
			"error",
			{"before": true, "after": true}
		],
		"line-comment-position": [
			"error",
			{"position": "above"}
		],
		"linebreak-style": [
			"error",
			"unix"
		],
		"lines-around-comment": [
			"error",
			{"beforeBlockComment": true, "afterBlockComment": true}
		],
		"multiline-ternary": [
			"error",
			"never"
		],
		"new-parens": [
			"error",
			"never"
		],
		"newline-per-chained-call": [
			"error",
			{"ignoreChainWithDepth": 3}
		],
		"no-extra-parens": "error",
		"no-mixed-spaces-and-tabs": "error",
		"no-multi-spaces": "error",
		"no-multiple-empty-lines": [
			"error",
			{"max": 2}
		],
		"no-trailing-spaces": [
			"error",
			{"ignoreComments": false, "skipBlankLines": false}
		],
		"no-whitespace-before-property": "error",
		"object-curly-newline": [
			"error",
			{
				"multiline": true,
				"minProperties": 4
			}
		],
		"object-curly-spacing": [
			"error",
			"never"
		],
		"operator-linebreak": [
			"error",
			"after"
		],
		"padded-blocks": [
			"error",
			"never"
		],
		"quotes": [
			"error",
			"double",
			{"allowTemplateLiterals": true}
		],
		"rest-spread-spacing": [
			"error",
			"never"
		],
		"semi": [
			"error",
			"always"
		],
		"semi-spacing": [
			"error",
			{"before": false, "after": true}
		],
		"semi-style": [
			"error",
			"last"
		],
		"space-before-blocks": [
			"error",
			"always"
		],
		"space-before-function-paren": [
			"error",
			"never"
		],
		"space-in-parens": [
			"error",
			"never"
		],
		"space-infix-ops": "error",
		"space-unary-ops": [
			2,
			{
				"words": true,
				"nonwords": false,
				"overrides": {
					"new": false,
					"++": true
				}
			}
		],
		"switch-colon-spacing": "error",
		"template-curly-spacing": [
			"error",
			"never"
		],
		"template-tag-spacing": [
			"error",
			"always"
		],
		"unicode-bom": [
			"error",
			"never"
		],
		"wrap-iife": [
			"error",
			"outside"
		],
		"wrap-regex": "error",
		"yield-star-spacing": [
			"error",
			"before"
		]
	}
};
