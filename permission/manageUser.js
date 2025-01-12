const { error } = require("../utils/apiResponse");

async function manageUser(req, res, next)
{
    if(req.userData?.id === parseInt(req.params.id) || req.userData?.role === 'admin')
    {
        next();
        return;
    }

    return error(res, "User not authorized");
}

module.exports = manageUser;