const postcssNesting = require('postcss-nesting');
const responsiveType = require('postcss-responsive-type');
const hoverMediaFeature = require('postcss-hover-media-feature');

const config = {
  plugins: [postcssNesting({}), responsiveType({}), hoverMediaFeature()]
};

module.exports = config;
