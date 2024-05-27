const orderdetailControllers = require('../controllers/orderdetail.comtrollers')
async function ordersdetailRoutes (fastify,options){
    fastify.post('/', orderdetailControllers.createOrderdatail);
    fastify.get('/', orderdetailControllers.getAllOrderdatails);
    fastify.get('/:id', orderdetailControllers.getOrderdatailById);
    fastify.put('/:id', orderdetailControllers.updateOrderdatail);
    fastify.delete('/:id', orderdetailControllers.deleteOrderdatail);
}
module.exports = ordersdetailRoutes;