/**
	*  ESLint → Plugins → YAML
	*  @link https://github.com/ota-meshi/eslint-plugin-yml Documentation.
 */

module.exports = {
	"extends": ["plugin:yml/standard"],
	"parser": "@babel/eslint-parser",
	"overrides": [
		{
			"files": ["*.yaml", "*.yml"],
			"parser": "yaml-eslint-parser"
		}
	]
};