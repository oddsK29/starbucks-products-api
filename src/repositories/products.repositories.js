const ProductsModel = require('../models/product.models');

class ProductsRepository {
  async create(data) {
    return await ProductsModel.query().insert(data);
  }

  async findById(id) {
    return await ProductsModel.query().findById(id);
  }

  async findAll() {
    return await ProductsModel.query().select();
  }

  async update(id, data) {
    return await ProductsModel.query().patchAndFetchById(id, data);
  }

  async delete(id) {
    return await ProductsModel.query().deleteById(id);
  }

}

module.exports = new ProductsRepository();
