/**
 *  ESLint → Plugins → Import
 *  @see https://github.com/benmosher/eslint-plugin-import
 */

module.exports = {
	"extends": [
		"plugin:import/recommended"
	],
	"plugins": [
		"import"
	],
	"rules": {
		"dynamic-import-chunkname": [
			"error",
			{
				importFunctions: [
					"dynamicImport"
				],
				webpackChunknameFormat: "[a-zA-Z0-9-/_]+"
			}
		],
		"import/no-unresolved": [
			"error",
			{
				commonjs: true,
				amd: false,
				ignore: [
					".img$"
				],
				caseSensitive: true
			}
		],
		"import/named": "error",
		"import/default": "error",
		"import/namespace": [
			"error",
			{allowComputed: false}
		],
		"import/no-absolute-path": [
			"error",
			{
				commonjs: true,
				amd: false
			}
		],
		"import/no-dynamic-require": "error",
		"import/no-internal-modules": [
			"error",
			{
				allow: [
					"**/actions/*",
					"source-map-support/*"
				]
			}
		],
		"import/no-webpack-loader-syntax": "error",
		"import/no-self-import": "error",
		"import/no-cycle": [
			"error"
		],
		"import/no-useless-path-segments": [
			"error",
			{
				noUselessIndex: true,
				commonjs: true
			}
		],
		"import/no-relative-parent-imports": "error",

		/** --- Plugin: Import::Helpful warnings ------ */

		"import/export": "error",
		"import/no-named-as-default": "warn",
		"import/no-named-as-default-member": "warn",
		"import/no-deprecated": "error",
		"import/no-extraneous-dependencies": [
			"error",
			{
				devDependencies: true,
				optionalDependencies: false,
				peerDependencies: false
			}
		],
		"import/no-mutable-exports": "warn",
		"import/no-unused-modules": "warn",

		/** --- Plugin: Import::Module systems------ */

		"import/unambiguous": 0,
		"import/no-commonjs": 0,
		"import/no-amd": "warn",
		"import/no-nodejs-modules": "error",

		/** --- Plugin: Import::Style guide------ */

		"import/first": "warn",
		"import/exports-last": "error",
		"import/no-duplicates": [
			"error",
			{considerQueryString: true}
		],
		"import/no-namespace": "warn",
		"import/extensions": [
			"warn",
			"never",
			{svg: "always"}
		],
		"import/order": [
			"error",
			{
				"newlines-between": "never",
				"alphabetize": {
					order: "asc",
					caseInsensitive: false
				}
			}
		],
		"import/newline-after-import": [
			"error",
			{count: 2}
		],
		"import/prefer-default-export": "warn",
		"import/max-dependencies": [
			"warn",
			{max: 9}
		],
		"import/no-unassigned-import": "warn",
		"import/no-named-default": "warn",
		"import/no-default-export": "warn",
		"import/no-named-export": "warn",
		"import/no-anonymous-default-export": "error",
		"import/group-exports": "warn"
	}
};
