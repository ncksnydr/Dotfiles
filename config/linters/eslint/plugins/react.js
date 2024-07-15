/**
 * --------------------------------------------------------------------------
 *   Linters → ESLint → Plugins → React
 *   @see https://www.npmjs.com/package/eslint-plugin-react
 * --------------------------------------------------------------------------
*/

module.exports = {
  "extends": ["plugin:react/recommended"],
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    }
  },
  "plugins": ["react"],
  "rules": {
    "react/boolean-prop-naming": ["error", { rule: "^(is|has)[A-Z]([A-Za-z0-9]?)+" }],
    "react/button-has-type": ["error", {
      "button": true,
      "submit": true,
      "reset": true
    }],
    "react/checked-requires-onchange-or-readonly": "warn",
    "react/default-props-match-prop-types": ["error", { "allowRequiredDefaults": true }],
    "react/destructuring-assignment": ["error", 'always'],
    "react/display-name": "error",
    "react/forbid-component-props": "off",
    "react/forbid-dom-props": "off",
    "react/forbid-elements": "off",
    "react/forbid-foreign-prop-types": "off",
    "react/forbid-prop-types": "off",
    "react/function-component-definition": "off",
    "react/hook-use-state": ["error", { "allowDestructuredState": true }],
    "react/iframe-missing-sandbox": "warn",
    "react/jsx-boolean-value": ["error", "always"],
    "react/jsx-child-element-spacing": "off",
    "react/jsx-closing-bracket-location": ["error", {
      "nonEmpty": "tag-aligned",
      "selfClosing": "after-props"
    }],
    "react/jsx-closing-tag-location": "error",
    "react/jsx-curly-brace-presence": "off",
    "react/jsx-curly-newline": ["error", {
      "multiline": "consistent",
      "singleline": "consistent"
    }],
    "react/jsx-curly-spacing": ["error", {
      "children": true,
      "when": "never"
    }],
    "react/jsx-equals-spacing": ["error", "always"],
    "react/jsx-filename-extension": ["error", { 
      "extensions": [".tsx"] ,
      "ignoreFilesWithoutCode": true
    }],
    "react/jsx-first-prop-new-line": ["error", "multiprop"],
    "react/jsx-fragments": ["error", "syntax"],
    "react/jsx-handler-names": ["error", {
      "checkInlineFunction": false,
      "checkLocalVariables": false,
      "eventHandlerPrefix": "handle",
      "eventHandlerPropPrefix": "on"
    }],
    "react/jsx-indent": ["error", "tab", {
      "checkAttributes": false,
      "indentLogicalExpressions": true
    }],
    "react/jsx-indent-props": ["error", "tab"],
    "react/jsx-key": ["error", { 
      "checkFragmentShorthand": true,
      "checkKeyMustBeforeSpread": true,
      "warnOnDuplicates": true
    }],
    "react/jsx-max-depth": ["warn", {
      "max": 3
    }],
    "react/jsx-max-props-per-line": ["error", { 
      "maximum": 1, 
      "when": "multiline"
    }],
    "react/jsx-newline": ["error", { 
      "prevent": true, 
      "allowMultilines": true
    }],
    "react/jsx-no-bind": ["error", {
      "allowArrowFunctions": true,
      "allowBind": false,
      "allowFunctions": false,
      "ignoreDOMComponents": true,
      "ignoreRefs": true
    }],
    "react/jsx-no-comment-textnodes": "error",
    "react/jsx-no-constructed-context-values": "error",
    "react/jsx-no-duplicate-props": ["error", { 
      "ignoreCase": false 
    }],
    "react/jsx-no-leaked-render": ["error", {
      "validStrategies": ["ternary"]
    }],
    "react/jsx-no-literals": ["error", {
      "noStrings": true,
      "allowedStrings": ["allowed"], 
      "ignoreProps": true, 
      "noAttributeStrings": true 
    }],
    "react/jsx-no-script-url": ["error", [
      {
        "name": "Link",
        "props": ["href", "src"]
      }
    ]],
    "react/jsx-no-target-blank": ["error", {
      "allowReferrer": false,
      "enforceDynamicLinks": true,
      "forms": true,
      "links": true,
      "warnOnSpreadAttributes": true,
    }],
    "react/jsx-no-undef": ["error", { 
      "allowGlobals": true 
    }],
    "react/jsx-no-useless-fragment": "error",
    "react/jsx-one-expression-per-line": ["error", { 
      "allow": "literal" 
    }],
    "react/jsx-pascal-case": ["error", { 
      "allowAllCaps": false, 
      "allowLeadingUnderscore": false,
      "allowNamespace": true,
    }],
    "react/jsx-props-no-multi-spaces": "error",
    "react/jsx-props-no-spreading": ["error", {
      "custom": "enforce",
      "explicitSpread": "enforce",
      "html": "enforce",
    }],
    "react/jsx-sort-props": ["error", {
      "callbacksLast": true,
      "ignoreCase": true,
      "locale": "auto",
      "multiline": "ignore",
      "noSortAlphabetically": false,
      "reservedFirst": false,
      "shorthandFirst": false,
      "shorthandLast": false
    }],
    "react/jsx-tag-spacing": ["error", {
      "afterOpening": "never",
      "beforeClosing": "proportional-always",
      "beforeSelfClosing": "always",
      "closingSlash": "never"
    }],
    "react/jsx-uses-react": "error",
    "react/jsx-uses-vars": "warn",
    "react/jsx-wrap-multilines": ["error", {
      "arrow": "parens",
      "assignment": "parens",
      "condition": "parens",
      "declaration": "parens",
      "logical": "parens",
      "prop": "ignore",
      "return": "parens"
    }],
    "react/no-access-state-in-setstate": "error",
    "react/no-adjacent-inline-elements": "error",
    "react/no-array-index-key": "error",
    "react/no-arrow-function-lifecycle": "error",
    "react/no-children-prop": "error",
    "react/no-danger": "error",
    "react/no-danger-with-children": "error",
    "react/no-deprecated": "error",
    "react/no-did-mount-set-state": "error",
    "react/no-did-update-set-state": "error",
    "react/no-direct-mutation-state": "error",
    "react/no-find-dom-node": "error",
    "react/no-invalid-html-attribute": "error",
    "react/no-is-mounted": "error",
    "react/no-multi-comp": ["error", {
      "ignoreStateless": false
    }],
    "react/no-namespace": "error",
    "react/no-object-type-as-default-prop": "error",
    "react/no-redundant-should-component-update": "error",
    "react/no-render-return-value": "error",
    "react/no-set-state": "error",
    "react/no-string-refs": ["error", {
      "noTemplateLiterals": false
    }],
    "react/no-this-in-sfc": "error",
    "react/no-typos": "error",
    "react/no-unescaped-entities": "error",
    "react/no-unknown-property": ["error", { 
      "requireDataLowercase": true
    }],
    "react/no-unsafe": ["error", {
      "checkAliases": true
    }],
    "react/no-unused-class-component-methods": "error",
    "react/no-unused-prop-types": ["error", {
      "skipShapeProps": true
    }],
    "react/no-unused-state": "error",
    "react/no-unused-class-component-methods": "error",
    "react/no-will-update-set-state": "error",
    "react/prefer-es6-class": ["error", "always"],
    "react/prefer-exact-props": "off",
    "react/prefer-read-only-props": "off",
    "react/prefer-stateless-function": "error",
    "react/prop-types": "error",
    "react/react-in-jsx-scope": "error",
    "react/require-default-props": "off",
    "react/require-optimization": "error",
    "react/require-render-return": "error",
    "react/self-closing-comp": ["error", {
      "component": true,
      "html": true
    }],
    "react/sort-comp": "error",
    "react/sort-default-props": ["error", {
      "ignoreCase": true
    }],
    "react/sort-prop-types": ["error", {
      "callbacksLast": true,
      "checkTypes": false,
      "ignoreCase": true,
      "noSortAlphabetically": false,
      "requiredFirst": false,
      "sortShapeProp": false
    }],
    "react/state-in-constructor": "error",
    "react/static-property-placement": "error",
    "react/style-prop-object": "error",
    "react/void-dom-elements-no-children": "error"
  }
};
