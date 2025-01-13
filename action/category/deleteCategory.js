const models = require('../../models');

async function deleteCategory(id)
{
    const category = await models.Category.findByPk(id);

    if(category)
    {
        return await category.destroy();
    }

    return false;
    
}

module.exports = deleteCategory;