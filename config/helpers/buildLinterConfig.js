/**
 * --------------------------------------------------------------------------
 *   Helpers → Build Linter Configs
 *   Compiles linter rules into a single config file.
 * --------------------------------------------------------------------------
*/



/**
 *   Imports and variables
 * ------------------------------------------------------ */
const { globSync } = require('glob');
const { mergeWith } = require('lodash');
const { copyFileSync, writeFileSync } = require('fs');

// Variables
const dotfilesPath = process.cwd();
const lintersPath = `${dotfilesPath}/config/linters`;


/**
 *   Methods
 * ------------------------------------------------------ */
// Properly merges arrays.
const customizer = (objValue, srcValue) => {
	if (Array.isArray(objValue)) {
		return objValue.concat(srcValue);
	}
};


// Merges all configuration files into a single object.
const mergeConfigFiles = (options) => {
	const matchingFiles = globSync(String(options.pathToRules));
	let rulesMerged = {};
	matchingFiles.forEach((file) => {
		const ruleSet = require(String(file));
		rulesMerged = mergeWith(rulesMerged, ruleSet, customizer);
	});
	return rulesMerged;
};


// Moves ignore file.
const moveIgnoreFile = (source, destination) => {
	copyFileSync(String(source), String(destination));
};

// Saves configuration to file.
const saveToFile = (data, path, ext) => {
	if (ext === 'json') {
		writeFileSync(String(path), JSON.stringify(data));
	} else {
		writeFileSync(String(path), data);
	}
};


/**
 *   Configs
 * ------------------------------------------------------ */

// Prettier
const prettier = () => {
	const fileName = '.prettierrc';
	const prettierOptions = mergeConfigFiles({ pathToRules: `${lintersPath}/prettier/{rules,overrides,plugins}/*.js` });
	saveToFile(prettierOptions, `${dotfilesPath}/${fileName}`, 'json');
	moveIgnoreFile(`${lintersPath}/prettier/.prettierignore`, `${dotfilesPath}/.prettierignore`);
};



// // ESLint
// const eslint = () => {
// 	const fileName = '.eslintrc';
// 	const eslintOptions = buildLinterConfig({ pathToRules: `${lintersPath}/eslint/{rules,plugins}/*.js` });
// 	saveToFile(eslintOptions, `${dotfilesPath}/${fileName}`, 'json');
// };

// Markdownlint.
const markdownlint = () => {
	const fileName = '.markdownlint.json';
	const markdownlintOptions = mergeConfigFiles({ pathToRules: `${lintersPath}/markdownlint/rules/*.js` });
	saveToFile(markdownlintOptions, `${dotfilesPath}/${fileName}`, 'json');
};

// // PHP-CS-Fixer.
// const phpCsFixer = () => {
// 	const fileName = '.php-cs-fixer-rules.json';
// 	const rules = buildLinterConfig({ pathToRules: `${lintersPath}/php-cs-fixer/**/*.js` });
// 	saveToFile(rules, `${dotfilesPath}/${fileName}`, 'json');
// };

// // Prettier
// const prettier = () => {
// 	// Yes, I know Prettier isn't technically a linter. Get off my back. XOXO — Nick
// 	const fileName = '.prettierrc';
// 	const prettierOptions = buildLinterConfig({ pathToRules: `${lintersPath}/prettier/{rules,overrides}/*.js` });
// 	saveToFile(prettierOptions, `${dotfilesPath}/${fileName}`, 'json');
// };

// // Stylelint
// const stylelint = () => {
// 	const fileName = '.stylelintrc.json';
// 	const stylelintOptions = buildLinterConfig({ pathToRules: `${lintersPath}/stylelint/rules/**/*.js` });
// 	saveToFile(stylelintOptions, `${dotfilesPath}/${fileName}`, 'json');
// };


module.exports = {
	markdownlint,
	prettier
};
