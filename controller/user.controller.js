const registerUser = require('../action/auth/registerUser');
const { exceptionError, success, error } = require('../utils/apiResponse');

async function register(req, res)
{
    try{

        const user = await registerUser(req.userData);

        if(user)
        {
            return success(res, {}, "User Created");
        }

        return error(res, "User cannot be created");

    }catch(error){
        return exceptionError(res, error.message)
    }
}

module.exports = {
    register
}