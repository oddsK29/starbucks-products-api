const OrderModel = require('../models/orders.models');
const OrderDetailModel = require('../models/orderdetail.models');

class OrderRepository {
  async create(data) {
    return await OrderModel.query().insert(data);
  }

  async findById(id) {
    return await OrderModel.query().findById(id);
  }

  async findAll() {
    return await OrderModel.query().select();
  }

  async findOrderDetailsCountByOrderId(id) {
    return await OrderDetailModel.query()
      .where('orders_id', id)
      .count('id as count')
      .first();
  }

  async update(id, data) {
    return await OrderModel.query().patchAndFetchById(id, data);
  }

  async delete(id) {
    return await OrderModel.query().deleteById(id);
  }

}

module.exports = new OrderRepository();
