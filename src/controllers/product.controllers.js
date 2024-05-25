const ProductModel = require('../services/products.services.js')

class ProductController {
    constructor(client) {
        this.productModel = new ProductModel(client)
    }

    async getAll(request, reply) {
        const products = await this.productModel.getAll()
        reply.send(products)
    }

    async getById(request, reply) {
        const id = request.params.id
        const product = await this.productModel.getById(id)
        reply.send(product)
    }

    async create(request, reply) {
        const newProduct = await this.productModel.create(request.body)
        reply.send(newProduct)
    }

    async update(request, reply) {
        const id = request.params.id
        const updatedProduct = await this.productModel.update(id, request.body)
        reply.send(updatedProduct)
    }

    async delete(request, reply) {
        const id = request.params.id
        const deletedProduct = await this.productModel.delete(id)
        reply.send(deletedProduct)
    }
}

module.exports = ProductController
