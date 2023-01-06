/**
	*  ESLint → Plugins → Import Sort
	*  @link https://github.com/lydell/eslint-plugin-simple-import-sort Documentation.
 */

module.exports = {
	"plugins": ["simple-import-sort"],
	"rules": {
		"simple-import-sort/imports": "error",
		"simple-import-sort/exports": "error",
		"import/first": "error",
		"import/newline-after-import": "error",
		"import/no-duplicates": "error"
	}
};