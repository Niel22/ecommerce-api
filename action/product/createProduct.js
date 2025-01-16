const models = require('../../models');

async function createProduct(data)
{
    const product = await models.Product.create(data);

    if(product)
    {
        return true;
    }

    return false;
}

module.exports = createProduct;