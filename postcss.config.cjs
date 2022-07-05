const postcssNesting = require('postcss-nesting');
const responsiveType = require('postcss-responsive-type');

const config = {
  plugins: [postcssNesting({}), responsiveType({})]
};

module.exports = config;
