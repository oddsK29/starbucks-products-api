const { Model } = require('objection');

class ProductsModel extends Model{
    static get tableName() {
        return 'products';
    }
    static get jsonSchema() {
        return {
            type: 'object',
            required: [
              'id',  
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
                id: { type: 'integer' },
                name: { type: 'string' },
                description: { type: 'string'},
                price: { type: 'integer' },
                region: { type: 'string' },
                weight: { type: 'integer'},
                flavor_profile: { type: 'object' },
                grind_option: { type: 'object' },
                roast_level: { type: 'string' },
                image_url: { type: 'object' },
                stock: { type: 'integer' }
              },
            };
        }
}
module.exports = ProductsModel;