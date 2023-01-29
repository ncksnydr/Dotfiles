/**
 *  Stylelint → Rules → Enforce stylistic conventions
 *  @see https://stylelint.io/user-guide/rules#enforce-stylistic-conventions
 *  @note 2023-01-26: These features have been frozen by the developers and
					will eventually be deprecated. The plugin authors want their users
					to move to using Prettier, but the combo of ESLint and EditorConfig
					gives me the most coverage. I like Stylelint for handling stylesheet
					files only. This is my hill and I am prepared to die on it.
 */

module.exports = {
	"rules": {
		"value-keyword-case": "lower",
		"function-name-case": "lower",
		"custom-property-empty-line-before": ["never", {
			"except": ["after-custom-property"]
		}],
		"selector-type-case": "lower",
		"rule-empty-line-before": ["always-multi-line", {
			"except": ["inside-block"]
		}],
		"at-rule-empty-line-before": "always",
		"comment-empty-line-before": "always",
		"comment-whitespace-inside": "always",
		"color-hex-case": "lower",
		"function-comma-newline-after": "never-multi-line",
		"function-comma-newline-before": "never-multi-line",
		"function-comma-space-after": "always",
		"function-comma-space-before": "never",
		"function-max-empty-lines": 0,
		"function-parentheses-newline-inside": "never-multi-line",
		"function-parentheses-space-inside": "never-single-line",
		"function-whitespace-after": "always",
		"number-leading-zero": "always",
		"number-no-trailing-zeros": true,
		"string-quotes": "double",
		"unit-case": "lower",
		"value-list-comma-newline-after": "never-multi-line",
		"value-list-comma-newline-before": "never-multi-line",
		"value-list-comma-space-after": "always-single-line",
		"value-list-comma-space-before": "never",
		"value-list-max-empty-lines": 0,
		"property-case": "lower",
		"declaration-bang-space-after": "never",
		"declaration-bang-space-before": "never",
		"declaration-colon-newline-after": "always-multi-line",
		"declaration-colon-space-after": "always",
		"declaration-colon-space-before": "never",
		"declaration-empty-line-before": "never",
		"declaration-block-semicolon-newline-after": "always",
		"declaration-block-semicolon-newline-before": "never-multi-line",
		"declaration-block-semicolon-space-after": "always-single-line",
		"declaration-block-semicolon-space-before": "never",
		"declaration-block-trailing-semicolon": "always",
		"block-closing-brace-empty-line-before": "never",
		"block-closing-brace-newline-after": "always",
		"block-closing-brace-newline-before": "always-multi-line",
		"block-closing-brace-space-after": "always-single-line",
		"block-closing-brace-space-before": "always-single-line",
		"block-opening-brace-newline-after": "always-multi-line",
		"block-opening-brace-newline-before": "never-multi-line",
		"block-opening-brace-space-after": "always-multi-line",
		"block-opening-brace-space-before": "always",
		"selector-attribute-brackets-space-inside": "never",
		"selector-attribute-operator-space-after": "never",
		"selector-attribute-operator-space-before": "never",
		"selector-combinator-space-after": "always",
		"selector-combinator-space-before": "always",
		"selector-descendant-combinator-no-non-space": true,
		"selector-max-empty-lines": 0,
		"selector-pseudo-class-case": "lower",
		"selector-pseudo-class-parentheses-space-inside": "never",
		"selector-pseudo-element-case": "lower",
		"selector-list-comma-newline-after": "never-multi-line",
		"selector-list-comma-newline-before": "never-multi-line",
		"selector-list-comma-space-after": "always",
		"selector-list-comma-space-before": "never",
		"media-feature-colon-space-after": "always",
		"media-feature-colon-space-before": "never",
		"media-feature-name-case": "lower",
		"media-feature-parentheses-space-inside": "never",
		"media-feature-range-operator-space-after": "always",
		"media-feature-range-operator-space-before": "always",
		"media-query-list-comma-newline-after": "never-multi-line",
		"media-query-list-comma-newline-before": "never-multi-line",
		"media-query-list-comma-space-after": "always-single-line",
		"media-query-list-comma-space-before": "never",
		"at-rule-name-case": "lower",
		"at-rule-name-newline-after": "always-multi-line",
		"at-rule-name-space-after": "always",
		"at-rule-semicolon-newline-after": "always",
		"at-rule-semicolon-space-before": "never",
		"indentation": "tab",
		"linebreaks": "unix",
		"max-empty-lines": 3,
		"no-eol-whitespace": [true, {
			"ignore": ["empty-lines"]
		}],
		"no-extra-semicolons": true,
		"unicode-bom": "never"
	}
};
