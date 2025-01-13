const models = require('../../models');

async function unblockUser(id)
{
    const [user] = await models.User.update(
        {
            isBlocked: false
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

module.exports = unblockUser;