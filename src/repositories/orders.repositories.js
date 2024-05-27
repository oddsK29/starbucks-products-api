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

  async findOrderDetailsByUserId(users_id){
    return await OrderDetailModel.query()
    .join('orders', 'orderdetail.orders_id', 'orders.id')
    .where('orders.users_id', users_id)
    .select('orderdetail.*', 'orders.users_id');

  }

  async update(id, data) {
    return await OrderModel.query().patchAndFetchById(id, data);
  }

  async updateOrderStatus(id,status) {
    let ordersCompleteDate;
    if (status === 'complete') {
      ordersCompleteDate = new Date().toISOString(); 
    }
    return await OrderModel.query() 
    .findById(id)
    .patch({
      status,
      orders_complete_date: ordersCompleteDate
    })
    .returning('*');
  }


  async delete(id) {
    return await OrderModel.query().deleteById(id);
  }

}

module.exports = new OrderRepository();
