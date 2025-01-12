const models = require('../../models');

async function updateUser(id, data)
{
    const user = await models.User.update(data, {
        where: {
            id: id
        }
    });

    if(user)
    {
        return true;
    }

    return false;
}

module.exports = updateUser;