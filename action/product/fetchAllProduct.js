const models = require('../../models');

async function fetchAllProduct(){

    const product = await models.Product.findAll({
        include: [
            {
                model: models.Category,
                as: 'category'
            },
            {
                model: models.User,
                as: 'user'
            }
        ]
    });

    if(product.length > 0)
    {
        return product;
    }

    return false;
}

module.exports = fetchAllProduct;