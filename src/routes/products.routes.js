const productsController = require('../controllers/product.controllers');

async function registerRoutes(fastify, options) {
  fastify.post('/registers', productsController.createProducts);
  fastify.get('/registers/:id', productsController.getProductsById);
  fastify.get('/registers', productsController.getAllProductss);
  fastify.put('/registers/:id', productsController.updateProducts);
  fastify.delete('/registers/:id', productsController.deleteProducts);
}

module.exports = registerRoutes;
