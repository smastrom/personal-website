const postcssNesting = require('postcss-nesting');
const responsiveType = require('postcss-responsive-type');
const variableCompress = require('postcss-variable-compress');

const config = {
  plugins: [postcssNesting({}), responsiveType({}) /* variableCompress() */]
};

module.exports = config;
