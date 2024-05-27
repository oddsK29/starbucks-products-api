const OrderModel = require('../models/orders.models');
const OrderDetailModel = require('../models/orderdetail.models');
const ProductModel = require('../models/product.models');
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

  async findOrderDetailsShoppingByUserId(id, users_id) {
    return await OrderDetailModel.query()
      .join('orders', 'orderdetail.orders_id', 'orders.id')
      .where('orders.id', id)
      .andWhere('orders.users_id', users_id)
      .andWhere('orders.status', 'shopping')
      .select('orderdetail.*', 'orders.users_id');
  }

  async update(id, data) {
    return await OrderModel.query().patchAndFetchById(id, data);
  }

  async updateOrderStatus(id, status) {
    let ordersCompleteDate;
    if (status === 'complete') {
      ordersCompleteDate = new Date().toISOString();
      await OrderDetailModel.query()
        .where('orders_id', id)
        .patch({ orders_complete_date: ordersCompleteDate });
    }
    return await OrderModel.query()
      .findById(id)
      .patch({
        status,
        orders_complete_date: ordersCompleteDate,
      })
      .returning('*');

  }

  async completeOrderAndSumTotal(id, status) {
    let ordersCompleteDate;
    if (status === 'complete') {
      ordersCompleteDate = new Date().toISOString();
      await OrderDetailModel.query()
        .where('orders_id', id)
        .patch({ orders_complete_date: ordersCompleteDate });
    }
    const total = await this.calculateTotalByOrderId(id);
    return await OrderModel.query()
      .findById(id)
      .patch({
        status,
        orders_complete_date: ordersCompleteDate,
        total: total
      })
      .returning('*');

  }

  async calculateTotalByOrderId(id) {
    const result = await OrderDetailModel.query()
      .join('products', 'orderdetail.products_id', 'products.id')
      .where('orderdetail.orders_id', id)
      .select('orderdetail.amout', 'products.price')

    const total = result.reduce((sum, item) => {
      return sum + (item.amout * item.price);
    }, 0);

    return total;
  }


  async delete(id) {
    return await OrderModel.query().deleteById(id);
  }

}

module.exports = new OrderRepository();
