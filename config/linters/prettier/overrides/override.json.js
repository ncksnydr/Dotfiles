/**
 *  Prettier::Base configuration
 * @see https://prettier.io/docs/en/configuration.html
 */

module.exports = {
	overrides: [
		{
			files: ['*.json', '*.jsonc'],
			options: {
				bracketSameLine: true,
				bracketSpacing: true,
				endOfLine: 'lf',
				useTabs: false,
				semi: false,
				singleQuote: false,
				tabWidth: 4,
				trailingComma: 'none',
				parser: 'json'
			}
		}
	]
};
