const models = require('../../models');

async function deleteUser(id)
{
    const user = await models.User.destroy({
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

module.exports = deleteUser;