'use strict';

const slugify = require('slugify');

module.exports = {
  /**
   * Triggered before user creation.
   */
  lifecycles: {
    async beforeCreate(data) {
      if (data.projectName) {
        data.slug = slugify(data.projectName, {lower: true});
      }
    },
    async beforeUpdate(params, data) {
      if (data.projectName) {
        data.slug = slugify(data.projectName, {lower: true});
      }
    },
  },
};
