const models = require('../models');
const jwt = require('jsonwebtoken');
const { error } = require('../utils/apiResponse');

async function authMiddleware(req, res, next)
{
    let token;

    if(req?.headers?.authorization?.startsWith("Bearer"))
    {
        token  = req.headers.authorization.split(" ")[1];
        const decoded = jwt.verify(token, process.env.JWT_KEY);
        
        if(!decoded.userId)
        {
            return error(res, "UnAuthenticated");
        }
        
        const user = await models.User.findByPk(decoded?.userId);

        req.userData = user;

        next();
        return;
    }

    return error(res, "Unauthenticated");


}

module.exports = authMiddleware;