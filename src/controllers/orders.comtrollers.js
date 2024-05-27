const orderService = require('../services/orders.services');

class ordersRoutes {
    async getAllOrders(req, reply) {
        try {
            const orders = await orderService.getAllOrders();
            reply.status(200).send(orders);
        } catch (err) {
            req.log.status(500).error(err);
        }
    }

    async getOrderById(req, reply) {
        try {
            const order = await orderService.getOrderById(req.params.id);
            if (!order) {
                reply.notFound(`Order with id ${req.params.id} not found`);
            } else {
                reply.status(200).send(order);
            }
        } catch (err) {
            req.log.error(err);
            reply.status(500).internalServerError('Unable to fetch order');
        }
    }

    async getOrderDetailsShoppingByUserId(req, reply) {
        try {
            const orderDetailsCount = await orderService.findOrderDetailsShoppingByUserId(req.params.id, req.params.users_id);
            if (orderDetailsCount[0] != null) {
                return reply.status(200).send(orderDetailsCount);
            }
            return reply.status(200).send("The orders is done");
        } catch (err) {
            req.log.error(err);
            reply.status(500).internalServerError('Unable to delete product');
        }
    }


    async createOrder(req, reply) {
        try {
            const order = await orderService.createOrder(req.body);
            reply.status(200).send(order);
        } catch (err) {
            req.log.error(err);
            reply.status(500).internalServerError('Unable to create order');
        }
    }


    async updateOrder(req, reply) {
        try {
            const order = await orderService.updateOrder(req.params.id, req.body);
            if (!order) {
                reply.notFound(`order with id ${req.params.id} not found`);
            } else {
                reply.status(200).send(order);
            }
        } catch (err) {
            req.log.error(err);
            reply.status(500).internalServerError('Unable to update order');
        }
    }


    async updateOrderStatus(req, reply) {
        try {
            const order = await orderService.updateOrderStatus(req.params.id, req.body.status);
            if (!order) {
                reply.notFound(`order with id ${req.params.id} not found`);
            } else {
                reply.status(200).send(order);
            }
        } catch (err) {
            req.log.error(err);
            reply.status(500).internalServerError('Unable to update order');
        }
    }


    async deleteOrder(req, reply) {
        try {
            const success = await orderService.deleteOrder(req.params.id);
            if (!success) {
                reply.status(404).notFound(`product with id ${req.params.id} not found`);
            } else {
                reply.status(200).send({ message: `product with id ${req.params.id} deleted successfully` });
            }
        } catch (err) {
            req.log.error(err);
            reply.status(500).internalServerError('Unable to delete product');
        }
    }

    async calculateTotalByOrderId(req, reply) {
        try {
            const order = await orderService.calculateTotalByOrderId(req.params.id);
            console.log(order);
            reply.status(200).send(order);

        } catch (err) {

        }
    }

    async completeOrderAndSumTotal(req, reply) {
        try {
            const order = await orderService.completeOrderAndSumTotal(req.params.id, req.body.status);
            console.log(order);
            reply.status(200).send(order);

        } catch (err) {

        }
    }

    async getOrdersByUserId(req, reply) {
       
        try {
            const order = await orderService.findOrdersByUserId(req.params.users_id);
            reply.status(200).send(order);
        } catch (err) {
            req.log.error(err);
            reply.status(500).internalServerError('Unable to update order');
        }
    }

    async findOrdersByStatus(req, reply) {
        const { orderstatus } = req.query;
        try {
            if (!orderstatus) {
                throw Error()
            }
            const orders = await orderService.getAllOrders();
            const filterOrders = orders.filter((item) => item.status.includes(orderstatus))
            reply.status(200).send(filterOrders);
        } catch (err) {
            console.log(err);
            req.log.error(err);
            reply.status(500).send({ error: 'Unable to fetch Orders' });
        }
    }
   
}

module.exports = new ordersRoutes();