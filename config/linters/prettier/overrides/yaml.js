/**
 * --------------------------------------------------------------------------
 *   Linters → Prettier → Overrides → YAML
 *   @see https://prettier.io/docs/en/configuration#configuration-overrides
 * --------------------------------------------------------------------------
*/

module.exports = {
  overrides: [
    {
      files: ['*.yml', '*.yaml'],
      options: {
        semi: false,
        singleQuote: false,
        tabWidth: 4,
        trailingComma: 'none',
        useTabs: false
      }
    }
  ]
};
