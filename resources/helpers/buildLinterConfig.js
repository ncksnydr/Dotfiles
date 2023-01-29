// TODO Add documentation header.
// TODO Organize variables.
const fs = require("fs");
const glob = require("glob");
const mergeWith = require("lodash.mergewith");
const dotfilesPath = process.cwd();
const lintersPath = `${dotfilesPath}/resources/linters`;

const storeData = (data, path, ext) => {
	if (ext === "json") {
		fs.writeFileSync(`${path}`, JSON.stringify(data));
	} else {
		fs.writeFileSync(`${path}`, data);
	}
};

const buildLinterConfig = options => {
	let rulesMerged = {};
	const matchingFiles = glob.sync(`${options.pathToRules}`);

	matchingFiles.forEach(file => {
		rulesMerged = mergeWith(rulesMerged, require(`${file}`), customizer);
	});

	return rulesMerged;
};

const customizer = (objValue, srcValue) => {
	if (Array.isArray(objValue)) {
		return objValue.concat(srcValue);
	}
};


// Babel.
const babel = () => {
	const fileName = "babel.config.json";
	const rules = buildLinterConfig({pathToRules: `${lintersPath}/babel/*.js`});
	storeData(rules, `${dotfilesPath}/${fileName}`, "json");
};


// ESLint
const eslint = () => {
	const fileName = ".eslintrc.json";
	const eslintOptions = buildLinterConfig({pathToRules: `${lintersPath}/eslint/{rules,plugins}/*.js`});
	storeData(eslintOptions, `${dotfilesPath}/${fileName}`, "json");
};


// Markdownlint.
const markdownlint = () => {
	const fileName = ".markdownlint.json";
	const markdownlintOptions = buildLinterConfig({pathToRules: `${lintersPath}/markdownlint/*.js`});
	storeData(markdownlintOptions, `${dotfilesPath}/${fileName}`, "json");
};


// PHP-CS-Fixer.
const phpCsFixer = () => {
	const fileName = ".php-cs-fixer-rules.json";
	const rules = buildLinterConfig({pathToRules: `${lintersPath}/php-cs-fixer/**/*.js`});
	storeData(rules, `${dotfilesPath}/${fileName}`, "json");
};


// Stylelint.
const stylelint = () => {
	const fileName = ".stylelintrc.json";
	const stylelintRules = buildLinterConfig({ pathToRules: `${lintersPath}/stylelint/{avoidErrors,nonStylistic,suggestions}.js` });
	storeData(stylelintRules, `${dotfilesPath}/${fileName}`, "json");
};


// Markdown
module.exports = {
	babel,
	eslint,
	markdownlint,
	phpCsFixer,
	stylelint
};
