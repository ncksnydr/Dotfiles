/**
 * --------------------------------------------------------------------------
 *   Linters → ESLint → Plugins → React Hooks
 *   @see https://www.npmjs.com/package/eslint-plugin-react-hooks
 * --------------------------------------------------------------------------
*/

module.exports = {
  plugins: ["react-hooks"],
  rules: {
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn"
  }
};
