const orderRepository = require('../repositories/orders.repositories');

class OrderService {
    async createOrder(data) {
        return await orderRepository.create(data);
    }

    async getOrderById(id) {
        return await orderRepository.findById(id);
    }

    async getAllOrders() {
        return await orderRepository.findAll();
    }

    async updateOrder(id, data) {
        return await orderRepository.update(id, data);
    }

    async deleteOrder(id) {
        return await orderRepository.delete(id);
    }
    
    async getOrderDetailsCountByOrderId(id){
        return await orderRepository.findOrderDetailsCountByOrderId(id);
    }

}

module.exports = new OrderService();
