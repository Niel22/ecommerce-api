const models = require('../../models');

async function updateProduct(id, data)
{
    const product = await models.Product.findByPk(id);
    console.log(product);
    if(product)
    {
        return await product.update(data);
    }

    return false;
}

module.exports = updateProduct;