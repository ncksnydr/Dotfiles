// TODO Add documentation header.
// TODO Organize variables.

const fs = require('fs');
const glob = require('glob');
const _ = require('lodash');

const dotfilesPath = process.cwd();
const lintersPath = `${dotfilesPath}/resources/config/linters`;

const storeData = (data, path, ext) => {
	if (ext === 'json') {
		fs.writeFileSync(String(path), JSON.stringify(data));
	} else {
		fs.writeFileSync(String(path), data);
	}
};

const buildLinterConfig = options => {
	let rulesMerged = {};
	const matchingFiles = glob.sync(String(options.pathToRules));

	matchingFiles.forEach(file => {
		rulesMerged = _.mergeWith(rulesMerged,
			require(String(file)),
			customizer);
	});

	return rulesMerged;
};

const customizer = (objValue, srcValue) => {
	if (Array.isArray(objValue)) {
		return objValue.concat(srcValue);
	}
};

// ESLint
const eslint = () => {
	const fileName = '.eslintrc';
	const eslintOptions = buildLinterConfig({ pathToRules: `${lintersPath}/eslint/{rules,plugins}/*.js` });
	storeData(eslintOptions, `${dotfilesPath}/${fileName}`, 'json');
};

// Markdownlint.
const markdownlint = () => {
	const fileName = '.markdownlint.json';
	const markdownlintOptions = buildLinterConfig({ pathToRules: `${lintersPath}/markdownlint/*.js` });
	storeData(markdownlintOptions, `${dotfilesPath}/${fileName}`, 'json');
};

// PHP-CS-Fixer.
const phpCsFixer = () => {
	const fileName = '.php-cs-fixer-rules.json';
	const rules = buildLinterConfig({ pathToRules: `${lintersPath}/php-cs-fixer/**/*.js` });
	storeData(rules, `${dotfilesPath}/${fileName}`, 'json');
};

// Prettier
const prettier = () => {
	// Yes, I know Prettier isn't technically a linter. Get off my back. XOXO — Nick
	const fileName = '.prettierrc';
	const prettierOptions = buildLinterConfig({ pathToRules: `${lintersPath}/prettier/{rules,overrides}/*.js` });
	storeData(prettierOptions, `${dotfilesPath}/${fileName}`, 'json');
};

// Stylelint
const stylelint = () => {
	const fileName = '.stylelintrc.json';
	const stylelintOptions = buildLinterConfig({ pathToRules: `${lintersPath}/stylelint/rules/**/*.js` });
	storeData(stylelintOptions, `${dotfilesPath}/${fileName}`, 'json');
};

module.exports = {
	eslint,
	markdownlint,
	phpCsFixer,
	prettier,
	stylelint
};
