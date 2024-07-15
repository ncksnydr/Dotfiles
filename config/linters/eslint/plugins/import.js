/**
 * --------------------------------------------------------------------------
 *   Linters → ESLint → Plugins → Import
 *   @see https://github.com/import-js/eslint-plugin-import
 *   @see https://github.com/import-js/eslint-import-resolver-typescript
 * --------------------------------------------------------------------------
*/

module.exports = {
  "extends": [
    "plugin:import/recommended",
    "plugin:import/typescript"
  ],
  "settings": {
    "import/resolver": {
      "node": true,
      "typescript": true
    }
  }
};
