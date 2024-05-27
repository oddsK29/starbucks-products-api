const { Model } = require('objection');

class Order extends Model {
  static get tableName() {
    return 'orders';
  }

  static get idColumn() {
    return 'id';
  }

  static get jsonSchema() {
    return {
      type: 'object',
      required: ['users_id', 'status'],
      properties: {
        id: { type: 'integer' },
        users_id: { type: 'integer' },
        orders_date: { type: 'string', format: 'date-time' },
        orders_complete_date: { type: 'string', format: 'date-time' },
        status: { type: 'string', maxLength: 50 },
        total: { type: 'number' }
      }
    };
  }
}

module.exports = Order;
