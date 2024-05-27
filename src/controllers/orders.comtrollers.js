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

    async getOrderDetailsCountByOrderId(req, reply) {
        try {
            const orderDetailsCount = await orderService.getOrderDetailsCountByOrderId(req.params.id);
            return reply.status(200).send(orderDetailsCount);
        } catch (err) {
            req.log.error(err);
            reply.status(500).internalServerError('Unable to delete product');
        }
    }


    async getOrderDetailsByUserId(req, reply) {
        try {
            const orderDetailsCount = await orderService.getOrderDetailsByUserId(req.params.users_id);
            return reply.status(200).send(orderDetailsCount);
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

}

module.exports = new ordersRoutes();