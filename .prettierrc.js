// module.exports = require('@umijs/fabric').prettier;
const dumiPrettierConfig = require('@umijs/fabric').prettier;

module.exports = {
  ...dumiPrettierConfig,
  semi: true,
  singleQuote: true,
  jsxBracketSameLine: true,
  bracketSpacing: true,
  tabWidth: 2,
  useTabs: false,
};
