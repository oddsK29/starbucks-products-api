const productsController = require('../controllers/product.controllers');

async function productsRoutes(fastify, options) {
    fastify.post('/', productsController.createProducts);
    fastify.get('/', productsController.getAllProductss);
    fastify.get('/:id', productsController.getProductsById);
    fastify.put('/:id', productsController.updateProducts);
    fastify.delete('/:id', productsController.deleteProducts);
    fastify.get('/grind', productsController.findByGrindOption);
    fastify.get('/flavor', productsController.findByFlavorProfile);
}

module.exports = productsRoutes;
