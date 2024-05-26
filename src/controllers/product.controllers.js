const productsService = require('../services/products.services');

class ProductsController {
  async createProducts(req, reply) {
    try {
      const product = await productsService.createProducts(req.body);
      reply.status(200).send(product);
    } catch (err) {
      req.log.error(err);
      reply.status(500).internalServerError('Unable to create product');
    }
  }

  async getProductsById(req, reply) {
    try {
      const product = await productsService.getProductsById(req.params.id);
      if (!product) {
        reply.notFound(`Products with id ${req.params.id} not found`);
      } else {
        reply.status(200).send(product);
      }
    } catch (err) {
      req.log.error(err);
      reply.status(500).internalServerError('Unable to fetch product');
    }
  }

  async getAllProductss(req, reply) {
    try {
      const products = await productsService.getAllProductss();
      reply.status(200).send(products);
    } catch (err) {
      req.log.status(500).error(err);
    }
  }

  async updateProducts(req, reply) {
    try {
      const product = await productsService.updateProducts(req.params.id, req.body);
      if (!product) {
        reply.notFound(`product with id ${req.params.id} not found`);
      } else {
        reply.status(200).send(product);
      }
    } catch (err) {
      req.log.error(err);
      reply.status(500).internalServerError('Unable to update product');
    }
  }

  async deleteProducts(req, reply) {
    try {
      const success = await productsService.deleteProducts(req.params.id);
      if (!success) {
        reply.status(404).notFound(`product with id ${req.params.id} not found`);
      } else {
        reply.status(200).send({ message: `product with id ${req.params.id} deleted successfully` });
      }
    } catch (err) {
      req.log.error(err);
      reply.status(500).internalServerError('Unable to delete product');
    }
  }


}

module.exports = new ProductsController();