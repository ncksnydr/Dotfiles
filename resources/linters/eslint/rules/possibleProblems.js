/**
 *  ESLint → Rules → Possible Problems
 *  @link https://eslint.org/docs/latest/rules/#possible-problems Documentation
 */

module.exports = {
	"rules": {
		"no-constructor-return": "error",
		"no-duplicate-imports": ["error", {includeExports: true}],
		"no-new-native-nonconstructor": "error",
		"no-promise-executor-return": "error",
		"no-self-assign": ["error", {props: true}],
		"no-self-compare": "error",
		"no-template-curly-in-string": "error",
		"no-unused-private-class-members": "error"
	}
};
