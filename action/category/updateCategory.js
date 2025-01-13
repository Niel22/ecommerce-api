const models = require('../../models');

async function updateCategory(id, data)
{
    const category = await models.Category.findByPk(id);

    if(category)
    {
        return await category.update(data);
    }

    return false;

}

module.exports = updateCategory;