const models = require('../../models');

async function deleteProduct(id)
{
    const product = await models.Product.findByPk(id);

    if(product)
    {
        return await product.destroy();
    }

    return false;
}

module.exports = deleteProduct;