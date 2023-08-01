module.exports = {
  env: {
    es2021: true,
    node: true,
  },
  extends: ["eslint:recommended", "prettier"],
  overrides: [
    {
      env: {
        node: true,
        es6: true,
      },
      files: [".eslintrc.{js,cjs}"],
      parserOptions: {
        sourceType: "script",
      },
    },
  ],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  rules: {
    indent: ["error", 2, { MemberExpression: "off", SwitchCase: 1 }],
    quotes: ["error", "double"],
    semi: ["error", "always"],
    "func-style": ["error", "expression", { allowArrowFunctions: true }],
    "no-unused-vars": ["warn", { args: "none", ignoreRestSiblings: true }],
    "no-trailing-spaces": ["error"],
    "arrow-parens": ["error", "always"],
    "eol-last": ["error", "always"],
    eqeqeq: ["error", "allow-null"],
  },
};

/*
this .eslintrc.cjs code referenced by expressjs/express github repository
https://github.com/expressjs/express/blob/master/.eslintrc.yml
*/
