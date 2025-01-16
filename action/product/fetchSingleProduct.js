const models = require('../../models');

async function fetchSingleProduct(id)
{
    const product = await models.Product.findByPk(id, {
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

    if(product)
    {
        return product;
    }

    return false;
}

module.exports = fetchSingleProduct;