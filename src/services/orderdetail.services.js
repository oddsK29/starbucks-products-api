const orderdetailRepository = require('../repositories/orderdetail.repositories');

class OrderDetailService {
    async createOrderDetail(data) {
        return await orderdetailRepository.create(data);
    }

    async getOrderDetailById(id) {
        return await orderdetailRepository.findById(id);
    }

    async getAllOrderDetails() {
        return await orderdetailRepository.findAll();
    }

    async updateOrderDetail(id, data) {
        return await orderdetailRepository.update(id, data);
    }

    async deleteOrderDetail(id) {
        return await orderdetailRepository.delete(id);
    }

    async findSockByProductsId(productId) {
        return await orderdetailRepository.findSockByProductsId(productId);
    }
}

module.exports = new OrderDetailService();
