const models = require('../../models');

async function createCategory(data)
{
    const category = await models.Category.create(data);
    console.log(category);
    if(category)
    {
        return true;
    }
    return false;
}

module.exports = createCategory;