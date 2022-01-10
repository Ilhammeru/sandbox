const { Model } = require('objection');

class ProductPrice extends Model {
    static get tableName() {
        return 'product_price';
    }

    static get relationMappings() {
        const Product = require('./product');
        return {
            product: {
                relation: Model.BelongsToOneRelation,
                modelClass: Product,
                join: {
                    from: 'product_price.product_id',
                    to: 'product.id'
                }
            }
        }
    }
}

module.exports = ProductPrice;