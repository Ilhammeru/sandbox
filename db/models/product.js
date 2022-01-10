const {Model} = require('objection');

class Product extends Model {
    static get tableName() {
        return 'product';
    }

    static get relationMappings() {
        const ProductPrice = require('./ProductPrice');
        return {
            product_price: {
                relation: Model.HasManyRelation,
                modelClass: ProductPrice,
                join: {
                    from: 'product.id',
                    to: 'product_price.product_id'
                }
            }
        };
    }
}

module.exports = Product;