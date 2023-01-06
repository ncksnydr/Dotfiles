/**
	*  ESLint → Plugins → GraphQL
	*  @link https://github.com/B2o5T/graphql-eslint Documentation.
 */

module.exports = {
	"overrides": [
		{
			"files": ["*.graphql"],
			"parser": "@graphql-eslint/eslint-plugin",
			"plugins": ["@graphql-eslint"],
			"rules": {
				"@graphql-eslint/known-type-names": "error"
			}
		}
	]
};