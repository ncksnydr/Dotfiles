/**
 *  Prettier::Base configuration
 * @see https://prettier.io/docs/en/configuration.html
 */

module.exports = {
    overrides: [
        {
            files: ['*.yaml', '*.yml'],
            options: {
                parser: 'yaml'
            }
        }
    ]
};
