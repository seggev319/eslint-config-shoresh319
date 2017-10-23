module.exports = {
    "env": {
        "browser": true,
        "es6": true,
        "node": true
    },
    "extends": "eslint:recommended",
    "parserOptions": {
        "sourceType": "module"
    },
    "rules": {
        "accessor-pairs": "warn",
        "array-bracket-newline": "warn",
        "array-bracket-spacing": "warn",
        "array-callback-return": "warn",
        "array-element-newline": "warn",
        "arrow-body-style": "warn",
        "arrow-parens": "warn",
        "arrow-spacing": "warn",
        "block-scoped-var": "warn",
        "block-spacing": "warn",
        "brace-style": [
            "warn",
            "1tbs"
        ],
        "callback-return": "warn",
        "camelcase": "warn",
        "capitalized-comments": "off",
        "class-methods-use-this": "warn",
        "comma-dangle": "off",
        "comma-spacing": [
            "warn",
            {
                "after": true,
                "before": false
            }
        ],
        "comma-style": [
            "warn",
            "last"
        ],
        "complexity": "warn",
        "computed-property-spacing": [
            "warn",
            "never"
        ],
        "consistent-return": "warn",
        "consistent-this": "warn",
        "curly": "warn",
        "default-case": "warn",
        "dot-location": "warn",
        "dot-notation": [
            "warn",
            {
                "allowKeywords": true
            }
        ],
        "eol-last": [
            "warn",
            "never"
        ],
        "eqeqeq": "warn",
        "for-direction": "warn",
        "func-call-spacing": "warn",
        "func-name-matching": "warn",
        "func-names": [
            "warn",
            "never"
        ],
        "func-style": "warn",
        "function-paren-newline": "warn",
        "generator-star-spacing": "warn",
        "getter-return": "warn",
        "global-require": "off",
        "guard-for-in": "off",
        "handle-callback-err": "warn",
        "id-blacklist": "warn",
        "id-length": "warn",
        "id-match": "warn",
        "indent": ["warn", "tab"],
        "indent-legacy": "off",
        "init-declarations": "warn",
        "jsx-quotes": "warn",
        "key-spacing": "off",
        "keyword-spacing": [
            "warn",
            {
                "after": true,
                "before": true
            }
        ],
        "line-comment-position": "off",
        "linebreak-style": [
            "warn",
            "unix"
        ],
        "lines-around-comment": "warn",
        "lines-around-directive": "warn",
        "lines-between-class-members": "warn",
        "max-depth": "warn",
        "max-len": "off",
        "max-lines": "warn",
        "max-nested-callbacks": "warn",
        "max-params": "warn",
        "max-statements": "warn",
        "max-statements-per-line": "warn",
        "multiline-comment-style": "off",
        "multiline-ternary": "warn",
        "new-parens": "warn",
        "newline-after-var": "off",
        "newline-before-return": "warn",
        "newline-per-chained-call": "warn",
        "no-alert": "warn",
        "no-array-constructor": "warn",
        "no-await-in-loop": "warn",
        "no-bitwise": "warn",
        "no-buffer-constructor": "warn",
        "no-caller": "warn",
        "no-catch-shadow": "warn",
        "no-confusing-arrow": "warn",
        "no-continue": "warn",
        "no-div-regex": "warn",
        "no-duplicate-imports": "warn",
        "no-else-return": "warn",
        "no-empty-function": "warn",
        "no-eq-null": "warn",
        "no-eval": "warn",
        "no-extend-native": "warn",
        "no-extra-bind": "warn",
        "no-extra-label": "warn",
        "no-extra-parens": "warn",
        "no-floating-decimal": "warn",
        "no-fallthrough": "warn",
        "no-implicit-coercion": "warn",
        "no-implicit-globals": "warn",
        "no-implied-eval": "warn",
        "no-inline-comments": "off",
        "no-invalid-this": "warn",
        "no-iterator": "warn",
        "no-label-var": "warn",
        "no-labels": "warn",
        "no-lone-blocks": "warn",
        "no-lonely-if": "warn",
        "no-loop-func": "warn",
        "no-magic-numbers": "warn",
        "no-mixed-operators": "warn",
        "no-mixed-requires": "warn",
        "no-multi-assign": "warn",
        "no-multi-spaces": "warn",
        "no-multi-str": "warn",
        "no-multiple-empty-lines": "warn",
        "no-native-reassign": "warn",
        "no-negated-condition": "warn",
        "no-negated-in-lhs": "warn",
        "no-nested-ternary": "warn",
        "no-new": "warn",
        "no-new-func": "warn",
        "no-new-object": "warn",
        "no-new-require": "warn",
        "no-new-wrappers": "warn",
        "no-octal-escape": "warn",
        "no-param-reassign": "warn",
        "no-path-concat": "warn",
        "no-plusplus": "warn",
        "no-process-env": "warn",
        "no-process-exit": "warn",
        "no-proto": "warn",
        "no-prototype-builtins": "warn",
        "no-restricted-globals": "warn",
        "no-restricted-imports": "warn",
        "no-restricted-modules": "warn",
        "no-restricted-properties": "warn",
        "no-restricted-syntax": "warn",
        "no-return-assign": "warn",
        "no-return-await": "warn",
        "no-script-url": "warn",
        "no-self-compare": "warn",
        "no-sequences": "warn",
        "no-shadow": "off",
        "no-shadow-restricted-names": "warn",
        "no-spaced-func": "warn",
        "no-sync": "warn",
        "no-tabs": "off",
        "no-template-curly-in-string": "warn",
        "no-ternary": "warn",
        "no-throw-literal": "warn",
        "no-trailing-spaces": "off",
        "no-undef-init": "warn",
        "no-undefined": "warn",
        "no-underscore-dangle": "warn",
        "no-unmodified-loop-condition": "warn",
        "no-unneeded-ternary": "warn",
        "no-unused-expressions": "warn",
        "no-unused-vars": "warn",
        "no-use-before-define": "warn",
        "no-useless-call": "warn",
        "no-useless-computed-key": "warn",
        "no-useless-concat": "warn",
        "no-useless-constructor": "warn",
        "no-useless-rename": "warn",
        "no-useless-return": "warn",
        "no-var": "off",
        "no-void": "warn",
        "no-warning-comments": [
            "warn",
            {
                "location": "start"
            }
        ],
        "no-whitespace-before-property": "warn",
        "no-with": "warn",
        "nonblock-statement-body-position": "warn",
        "object-curly-newline": "warn",
        "object-curly-spacing": [
            "warn",
            "always"
        ],
        "object-property-newline": "warn",
        "object-shorthand": "warn",
        "one-var": "off",
        "one-var-declaration-per-line": "warn",
        "operator-assignment": "warn",
        "operator-linebreak": "warn",
        "padded-blocks": "off",
        "padding-line-between-statements": "warn",
        "prefer-arrow-callback": "warn",
        "prefer-const": "off",
        "prefer-destructuring": "warn",
        "prefer-numeric-literals": "warn",
        "prefer-promise-reject-errors": "warn",
        "prefer-reflect": "warn",
        "prefer-rest-params": "warn",
        "prefer-spread": "warn",
        "prefer-template": "off",
        "quote-props": "off",
        "quotes": "off",
        "radix": "warn",
        "require-await": "warn",
        "require-jsdoc": "warn",
        "rest-spread-spacing": "warn",
        "semi": "warn",
        "semi-spacing": "warn",
        "semi-style": [
            "warn",
            "last"
        ],
        "sort-imports": "warn",
        "sort-keys": "off",
        "sort-vars": "warn",
        "space-before-blocks": "warn",
        "space-before-function-paren": "off",
        "space-in-parens": [
            "warn",
            "never"
        ],
        "space-infix-ops": "off",
        "space-unary-ops": "warn",
        "spaced-comment": "off",
        "strict": "warn",
        "switch-colon-spacing": "warn",
        "symbol-description": "warn",
        "template-curly-spacing": "warn",
        "template-tag-spacing": "warn",
        "unicode-bom": [
            "warn",
            "never"
        ],
        "valid-jsdoc": "warn",
        "vars-on-top": "warn",
        "wrap-iife": "warn",
        "wrap-regex": "warn",
        "yield-star-spacing": "warn",
        "yoda": [
            "warn",
            "never"
        ]
    }
};