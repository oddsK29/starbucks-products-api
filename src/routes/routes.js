
const productsRoutes = require('./products.routes')

module.exports = async function (fastify, options) {
    fastify.register(productsRoutes, { prefix: '/api/products' })
}