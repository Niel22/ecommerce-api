const models = require('../../models');

async function fetchSingleProduct(id)
{
    const product = await models.Product.findByPk(id);

    if(product)
    {
        return product;
    }

    return false;
}

module.exports = fetchSingleProduct;