const _ = require('lodash');

const { bjcp_styles } = require('../static_data/bjcp_styles.json');

module.exports = {
  getStyle(styleId) {
    return _.find(bjcp_styles, { id: styleId });
  },

  listStyles() {
    return bjcp_styles;
  },
};
