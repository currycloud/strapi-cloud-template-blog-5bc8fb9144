'use strict';

/**
 *  article controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::article.article', ({ strapi }) => ({
  async find(ctx) {
    // Set default sort to publishedAt descending (most recent first)
    // Only apply if no sort parameter is provided
    if (!ctx.query.sort || (Array.isArray(ctx.query.sort) && ctx.query.sort.length === 0)) {
      ctx.query.sort = { publishedAt: 'desc' };
    }
    
    // Call the default find method
    const { data, meta } = await super.find(ctx);
    
    return { data, meta };
  },
}));
