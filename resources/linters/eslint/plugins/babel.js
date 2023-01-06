/**
	*  ESLint → Plugins → Babel
	*  @link https://github.com/babel/babel/tree/main/eslint/babel-eslint-plugin Documentation.
 */

module.exports = {
	"plugins": ["@babel"],
	"rules": {
		"@babel/new-cap": "error",
		"@babel/no-invalid-this": "error",
		"@babel/no-unused-expressions": "error",
		"@babel/object-curly-spacing": "error",
		"@babel/semi": "error"
	}
};