const { Model } = require('objection');

class ProductsModel extends Model {
    static get tableName() {
        return 'products';
    }
    static get idColumn() {
        return 'id';
      }

    static get jsonSchema() {
        return {
            type: 'object',
            required: [
                'name',
                'description',
                'price',
                'region',
                'weight',
                'flavor_profile',
                'grind_option',
                'roast_level',
                'image_url',
                'stock'
            ],
            properties: {
                name: { type: 'string' },
                description: { type: 'string' },
                price: { type: 'number' },
                region: { type: 'string' },
                weight: { type: 'number' },
                flavor_profile: { type: 'array', items: { type: 'string' } },
                grind_option: { type: 'array', items: { type: 'string' } },
                roast_level: { type: 'integer' },
                image_url: {
                    type: 'array',
                    items: { type: 'string', format: 'uri' },
                    minItems: 1
                },
                stock: { type: 'integer' }
            },
        };
    }
}
module.exports = ProductsModel;