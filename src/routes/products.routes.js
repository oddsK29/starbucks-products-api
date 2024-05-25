const ProductController = require('../controllers/product.controllers.js')

async function productRoutes(fastify, options) {
    const productController = new ProductController(fastify.pg)

    fastify.get('/products', productController.getAll.bind(productController))
    fastify.get('/products/:id', productController.getById.bind(productController))
    fastify.post('/products', productController.create.bind(productController))
    fastify.put('/products/:id', productController.update.bind(productController))
    fastify.delete('/products/:id', productController.delete.bind(productController))
}

module.exports = productRoutes
