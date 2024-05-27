const orderControllers = require('../controllers/orders.comtrollers')
async function ordersRoutes(fastify, options) {
    fastify.post('/', orderControllers.createOrder);
    fastify.get('/', orderControllers.getAllOrders);
    fastify.get('/:id', orderControllers.getOrderById);
    fastify.get('/count/:id', orderControllers.getOrderDetailsCountByOrderId);
    fastify.put('/:id', orderControllers.updateOrder);
    fastify.delete('/:id', orderControllers.deleteOrder);
}

module.exports = ordersRoutes;