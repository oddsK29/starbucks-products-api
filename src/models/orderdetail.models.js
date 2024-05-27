const { Model } = require('objection');

class OrderDetail extends Model {
  static get tableName() {
    return 'orderdetail';
  }

  static get idColumn() {
    return 'id';
  }

  static get relationMappingsProduct() {
    const Products = require('./product.models'); // Assuming you have a Product model
    return {
      product: {
        relation: Model.BelongsToOneRelation,
        modelClass: Products,
        join: {
          from: 'orderdetail.products_id',
          to: 'products.id'
        }
      }
    };
  }

  static get relationMappingsOrders() {
    const Products = require('./orders.models'); // Assuming you have a Product model
    return {
      product: {
        relation: Model.BelongsToOneRelation,
        modelClass: Products,
        join: {
          from: 'orderdetail.orders_id',
          to: 'orders.id'
        }
      }
    };
  }

  static get jsonSchema() {
    return {
      type: 'object',
      required: ['products_id', 'amout', 'orders_id'],
      properties: {
        id: { type: 'integer' },
        products_id: { type: 'integer' },
        amout: { type: 'integer' },
        orders_date: { type: 'string', format: 'date-time' },
        orders_complete_date: { type: 'string', format: 'date-time' },
        orders_id: { type: 'integer' },
      }
    };
  }
}

module.exports = OrderDetail;
