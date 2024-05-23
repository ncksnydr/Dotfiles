/**
 *  Prettier::Base configuration
 * @see https://prettier.io/docs/en/configuration.html
 */

module.exports = {
    overrides: [
        {
            files: ['*.html'],
            options: {
                parser: 'html'
            }
        }
    ]
};
