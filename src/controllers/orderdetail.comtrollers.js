const orderdetailService = require('../services/orderdetail.services');

class orderdetailsRoutes {
    async getAllOrderdatails(req, reply) {
        try {
            const orderdetails = await orderdetailService.getAllOrderDetails();
            reply.status(200).send(orderdetails);
        } catch (err) {
            req.log.status(500).error(err);
        }
    }

    async getOrderdatailById(req, reply) {
        try {
            const orderdetail = await orderdetailService.getOrderDetailById(req.params.id);
            if (!orderdetail) {
                reply.notFound(`Order with id ${req.params.id} not found`);
            } else {
                reply.status(200).send(orderdetail);
            }
        } catch (err) {
            req.log.error(err);
            reply.status(500).internalServerError('Unable to fetch orderdetail');
        }
    }

    async createOrderdatail(req, reply) {
        try {
            const orderdatailProducts = await orderdetailService.findSockByProductsId(req.body.products_id);
            if (!orderdatailProducts) {
                throw Error()
            }
            else if (orderdatailProducts.stock == 0) {
                reply.status(200).send("The product is sold out.");
            }
            else if (req.body.amout > orderdatailProducts.stock) {
                reply.status(200).send(orderdatailProducts);
            } else {
                const orderdetail = await orderdetailService.createOrderDetail(req.body);
                reply.status(200).send(orderdetail);
            }
        } catch (err) {
            req.log.error(err);
            reply.status(500).internalServerError('Unable to create orderdetail');
        }
    }


    async updateOrderdatail(req, reply) {
        try {
            const orderdetail = await orderdetailService.updateOrderDetail(req.params.id, req.body);
            if (!orderdetail) {
                reply.notFound(`orderdetail with id ${req.params.id} not found`);
            } else {
                reply.status(200).send(orderdetail);
            }
        } catch (err) {
            req.log.error(err);
            reply.status(500).internalServerError('Unable to update orderdetail');
        }
    }

    async deleteOrderdatail(req, reply) {
        try {
            const success = await orderdetailService.deleteOrderDetail(req.params.id);
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

module.exports = new orderdetailsRoutes();