const orderControllers = require('../controllers/orders.comtrollers')
async function ordersRoutes(fastify, options) {
    fastify.post('/', orderControllers.createOrder);
    fastify.get('/', orderControllers.getAllOrders);
    fastify.get('/:id', orderControllers.getOrderById);
   
    fastify.put('/:id', orderControllers.updateOrder);
    fastify.put('/status/:id', orderControllers.updateOrderStatus);
    fastify.delete('/:id', orderControllers.deleteOrder);

    fastify.get('/user/:users_id', orderControllers.getOrdersByUserId);
    fastify.get('/user/:id/:users_id', orderControllers.getOrderDetailsShoppingByUserId);
    fastify.get('/total/:id', orderControllers.calculateTotalByOrderId);
    fastify.put('/status/total/:id', orderControllers.completeOrderAndSumTotal);
}

module.exports = ordersRoutes;