
const productsRoutes = require('./products.routes')
const ordersRoutes = require('./orders.routes')
const orderdetailRoutes = require('./orderdetail.routes')

module.exports = async function (fastify, options) {
    fastify.register(productsRoutes, { prefix: '/api/products' })
    fastify.register(ordersRoutes, { prefix: '/api/orders' })
    fastify.register(orderdetailRoutes, { prefix: '/api/orderdateil' })
}