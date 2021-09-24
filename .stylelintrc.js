module.exports = {
  extends: [
    "stylelint-config-recommended",
    "stylelint-prettier/recommended"
  ],
  plugins: ["stylelint-scss", 'stylelint-prettier'],
  rules: {
    "prettier/prettier": [true, { "endOfLine": "auto" }],
    "function-calc-no-invalid": true,
    "value-no-vendor-prefix": true,
    "at-rule-semicolon-newline-after": "always",
    "unit-no-unknown": true,
    "property-no-unknown": true,
    "block-no-empty": true,
    "selector-pseudo-class-no-unknown": true,
    "selector-pseudo-element-no-unknown": true,
    "selector-type-no-unknown": true, 
    "media-feature-name-no-unknown": true, 
    "no-duplicate-at-import-rules": true,
    "no-extra-semicolons": true,
    "no-invalid-double-slash-comments": true,
    "no-invalid-position-at-import-rule": true,
    "color-no-invalid-hex": true,
    "color-named": "always-where-possible",
    "unit-disallowed-list": ["em"],
    "value-no-vendor-prefix": true,
    "property-no-vendor-prefix": true,
  },
};