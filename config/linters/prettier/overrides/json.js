/**
 * --------------------------------------------------------------------------
 *   Linters → Prettier → Overrides → JSON
 *   @see https://prettier.io/docs/en/configuration#configuration-overrides
 * --------------------------------------------------------------------------
 */

module.exports = {
  overrides: [
    {
      files: ["*.json", "*.jsonc"],
      options: {
        semi: false,
        singleQuote: false,
        tabWidth: 4,
        trailingComma: "none",
        useTabs: false
      }
    }
  ]
};
