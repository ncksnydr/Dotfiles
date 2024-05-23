/**
 *  Prettier::Overrides::CSS
 * @see https://prettier.io/docs/en/configuration.html
 */

module.exports = {
	overrides: [
		{
			files: ['*.css'],
			options: {
				parser: 'css',
				order: 'alphabetical'
			}
		},
		{
			files: ['*.scss'],
			options: {
				parser: 'scss',
				order: 'alphabetical'
			}
		}
	]
};
