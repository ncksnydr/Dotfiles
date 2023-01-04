// TODO Add documentation header.
// TODO Organize variables.
const fs = require('fs');
const glob = require('glob');
const mergeWith = require('lodash.mergewith');
const dotfilesPath = process.cwd();
const lintersPath = `${dotfilesPath}/resources/linters`;

const storeData = (data, path, ext) => {
	if (ext === "json") {
		fs.writeFileSync(`${path}`, JSON.stringify(data));
	} else {
		fs.writeFileSync(`${path}`, data);
	}
};

const buildLinterConfig = (options) => {
	let rulesMerged = {};
	const matchingFiles = glob.sync(`${options.pathToRules}`);

	matchingFiles.forEach((file) => {
		rulesMerged = mergeWith(rulesMerged, require(`${file}`), customizer);
	});

	return rulesMerged;
};

const customizer = (objValue, srcValue) => {
	if (Array.isArray(objValue)) {
		return objValue.concat(srcValue);
	}
}


// Babel.
const babel = () => {
	const fileName = "babel.config.json";
	const rules = buildLinterConfig({ pathToRules: `${lintersPath}/babel/*.js` });
	storeData(rules, `${dotfilesPath}/${fileName}`, "json");
};


// ESLint
const eslint = () => {
	const fileName = ".eslintrc.json";
	const rules = buildLinterConfig({ pathToRules: `${lintersPath}/eslint/rules/**/*.js` });

	let config = {
		parser: 'vue-eslint-parser',
		parserOptions: {
			allowImportExportEverywhere: true,
			babelOptions: {
				configFile: 'babel.config.json',
			},
			ecmaFeatures: {
				globalReturn: false,
				impliedStrict: false,
				jsx: false
			},
			ecmaVersion: 12,
			parser: '@babel/eslint-parser',
			sourceType: 'module',
			vueFeatures: {
				filter: true,
				interpolationAsNonHTML: false,
			}
		},

		"globals": {
			Enquire: 'readonly',
			Modernizr: 'readonly',
			Vue: 'readonly',
			Vuex: 'readonly'
		},
		"env": {
			amd: false,
			applescript: false,
			atomtest: false,
			browser: true,
			commonjs: true,
			embertest: false,
			es2021: true,
			greasemonkey: false,
			jasmine: false,
			jest: false,
			jquery: false,
			meteor: false,
			mocha: false,
			mongo: false,
			nashorn: false,
			node: true,
			phantomjs: true,
			protractor: false,
			qunit: false,
			serviceworker: true,
			shelljs: false,
			webextensions: false,
			worker: true
		},
		"overrides": [
			{
				files: [
					'**/__tests__/*.{j,t}s?(x)',
					'**/tests/unit/**/*.spec.{j,t}s?(x)',
				],
				env: {
					jest: true,
				}
			}
		],
		"extends": [
			"eslint:recommended",
			"plugin:compat/recommended",
			"plugin:import/recommended",
			"plugin:vue/vue3-strongly-recommended",
		],
		"plugins": [
			"ava",
			"compat",
			"import",
			"jest",
			"vue"
		],
		"rules": {}
	};
	config.rules = rules;
	storeData(config, `${dotfilesPath}/${fileName}`, "json");
};



// Markdownlint.
const markdownlint = () => {
	const fileName = ".markdownlint.json";
	const rules = buildLinterConfig({ pathToRules: `${lintersPath}/markdownlint/*.js` });
	storeData(rules, `${dotfilesPath}/${fileName}`, "json");
};


// PHP-CS-Fixer.
const phpCsFixer = () => {
	const fileName = ".php-cs-fixer-rules.json";
	const rules = buildLinterConfig({ pathToRules: `${lintersPath}/php-cs-fixer/**/*.js` });
	storeData(rules, `${dotfilesPath}/${fileName}`, "json");
};


// Stylelint.
const stylelint = () => {
	const fileName = ".stylelintrc.json";
	const rules = buildLinterConfig({ pathToRules: `${lintersPath}/stylelint/rules/*.js` });

	let config = {
		"extends": [
			"stylelint-config-standard"
		],
		//"customSyntax": "postcss-scss",
		"plugins": [
			// "stylelint-a11y",
			// "stylelint-color-format",
			// "stylelint-high-performance-animation",
			// "stylelint-images",
			// "stylelint-no-restricted-syntax",
			// "stylelint-no-unresolved-module",
			// "stylelint-no-unsupported-browser-features",
			// "stylelint-order",
			// "stylelint-use-nesting"
		],
		"rules": {}
	};
	config.rules = rules;
	storeData(config, `${dotfilesPath}/${fileName}`, "json");
};


// Markdown
module.exports = {
	babel,
	eslint,
	markdownlint,
	phpCsFixer,
	stylelint
};
