const productsRepository = require('../repositories/product.repositories');

class ProductsService {
  async createProducts(data) {
    return await productsRepository.create(data);
  }

  async getProductsById(id) {
    return await productsRepository.findById(id);
  }

  async getAllProductss() {
    return await productsRepository.findAll();
  }

  async updateProducts(id, data) {
    return await productsRepository.update(id, data);
  }

  async deleteProducts(id) {
    return await productsRepository.delete(id);
  }

}

module.exports = new ProductsService();
