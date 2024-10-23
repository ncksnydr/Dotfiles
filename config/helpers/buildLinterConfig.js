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
const replace = require('replace-in-file');

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
const copyFile = (source, destination) => {
	copyFileSync(String(source), String(destination));
};


// Replace placeholder with actual value.
const replaceTextInFile = (file, placeholder, value) => {
	const options = {
		files: String(file),
		from: new RegExp(placeholder, 'g'),
		to: value
	};
	replace.sync(options);
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

// Markdownlint
const markdownlint = () => {
	const fileName = '.markdownlint.json';
	const markdownlintOptions = mergeConfigFiles({ pathToRules: `${lintersPath}/markdownlint/rules/*.js` });
	saveToFile(markdownlintOptions, `${dotfilesPath}/${fileName}`, 'json');
};

// PHP-CS-Fixer
const phpCsFixer = () => {
	const phpCsFixerOptions = mergeConfigFiles({ pathToRules: `${lintersPath}/php-cs-fixers/rules/*.js` });
	copyFile(`${lintersPath}/php-cs-fixer/.php-cs-fixer.php`, `${dotfilesPath}/.php-cs-fixer.php`);
	replaceTextInFile(`${dotfilesPath}/.php-cs-fixer.php`, '@@RULES@@', JSON.stringify(phpCsFixerOptions));
};


// Prettier
const prettier = () => {
	const fileName = '.prettierrc';
	const prettierOptions = mergeConfigFiles({ pathToRules: `${lintersPath}/prettier/{rules,overrides,plugins}/*.js` });
	saveToFile(prettierOptions, `${dotfilesPath}/${fileName}`, 'json');
	copyFile(`${lintersPath}/prettier/.prettierignore`, `${dotfilesPath}/.prettierignore`);
};



// ESLint
const eslint = () => {
	const fileName = '.eslintrc';
	const eslintOptions = buildLinterConfig({ pathToRules: `${lintersPath}/eslint/{rules,plugins}/*.js` });
	saveToFile(eslintOptions, `${dotfilesPath}/${fileName}`, 'json');
};


module.exports = {
	markdownlint,
	phpCsFixer,
	prettier,
	eslint
};
