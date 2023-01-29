/**
	*  ESLint → Rules → Recommended
	*  @link https://eslint.org/docs/latest/rules/#possible-problems Documentation
 */

module.exports = {
	"root": true,
	"extends": [
		"eslint:recommended",
		"prettier"
	],
	"env": {
		"browser": true,
		"es2022": true,
		"node": true,
		"amd": true,
		"serviceworker": true,
		"worker": true
	},
	"parserOptions": {
		"ecmaVersion": "latest",
		"sourceType": "module"
	}
};
