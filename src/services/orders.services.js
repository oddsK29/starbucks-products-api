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

    async updateOrderStatus(id, status) {
        return await orderRepository.updateOrderStatus(id,status);
    }

    async deleteOrder(id) {
        return await orderRepository.delete(id);
    }

    async findOrderDetailsShoppingByUserId(id,users_id){
        return await orderRepository.findOrderDetailsShoppingByUserId(id,users_id);
    }

    async calculateTotalByOrderId (id){
        return await orderRepository.calculateTotalByOrderId(id);
    }

    async completeOrderAndSumTotal (id,status){
        return await orderRepository.completeOrderAndSumTotal(id,status);
    }

    async findOrdersByUserId(users_id){
        return await orderRepository.findOrdersByUserId(users_id);
    }
}

module.exports = new OrderService();
