/**
 * --------------------------------------------------------------------------
 *   Linters → Prettier → Overrides → PHP
 *   @see https://prettier.io/docs/en/configuration#configuration-overrides
 * --------------------------------------------------------------------------
*/

module.exports = {
  overrides: [
    {
      files: ["*.php"],
      parser: "php",
      options: {
        braceStyle: '1tbs',
        phpVersion: '8.2',
        semi: true,
        singleQuote: false,
        tabWidth: 4,
        trailingCommaPHP: true,
        useTabs: false
      }
    }
  ]
};
