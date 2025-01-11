const models = require('../../models');

async function registerUser(userData)
{
    try{

        const user = await models.User.create(userData);
        
        if(user)
            {
                return true;
            }
            
            return false;
    }catch(error){
        console.log(error.message);
        return false;
    }
}

module.exports = registerUser;