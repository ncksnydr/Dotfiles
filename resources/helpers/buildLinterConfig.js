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
	const eslintOptions = buildLinterConfig({ pathToRules: `${lintersPath}/eslint/rules/*.js` });
	storeData(eslintOptions, `${dotfilesPath}/${fileName}`, "json");
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
