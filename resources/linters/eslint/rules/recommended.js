/**
	*  ESLint → Rules → Recommended
	*  @link https://eslint.org/docs/latest/rules/#possible-problems Documentation
 */

module.exports = {
	"extends": ["eslint:recommended"],
	"env": {
		"browser": true,
		"es2021": true
	},
	"parserOptions": {
		"ecmaVersion": "latest",
		"sourceType": "module"
	}
};
