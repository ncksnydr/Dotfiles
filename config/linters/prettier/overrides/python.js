/**
 * --------------------------------------------------------------------------
 *   Linters → Prettier → Overrides → Python
 *   @see https://prettier.io/docs/en/configuration#configuration-overrides
 * --------------------------------------------------------------------------
*/

module.exports = {
  overrides: [
    {
      files: ["*.py"],
      options: {
        semi: true,
        singleQuote: true,
        tabWidth: 4,
        useTabs: false
      }
    }
  ]
};
