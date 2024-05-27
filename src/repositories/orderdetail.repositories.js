const OrderDetailModel = require('../models/orderdetail.models');

class OrderDetailRepository {
  async create(data) {
    return await OrderDetailModel.query().insert(data);
  }

  async findById(id) {
    return await OrderDetailModel.query().findById(id);
  }

  async findAll() {
    return await OrderDetailModel.query().select();
  }

  async update(id, data) {
    return await OrderDetailModel.query().patchAndFetchById(id, data);
  }

  async delete(id) {
    return await OrderDetailModel.query().deleteById(id);
  }

  async findSockByProductsId(productId){
    const orderDetails = await OrderDetailModel.query()
        .select('products.stock')
        .join('products', 'orderdetail.products_id', 'products.id')
        .where('products.id', productId)
        .first();
    return orderDetails;
  }

}

module.exports = new OrderDetailRepository();
