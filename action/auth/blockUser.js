const models = require('../../models');

async function blockUser(id)
{
    const [user] = await models.User.update(
        {
            isBlocked: true
        }, {
            where: {
                id: id,
                role: 'user'
            }
        }
    );

    if(user)
    {
        return true;        
    }

    return false;
}

module.exports = blockUser;