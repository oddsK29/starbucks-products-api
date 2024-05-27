const OrderModel = require('../models/orders.models');

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

  async update(id, data) {
    return await OrderModel.query().patchAndFetchById(id, data);
  }

  async delete(id) {
    return await OrderModel.query().deleteById(id);
  }

}

module.exports = new OrderRepository();
