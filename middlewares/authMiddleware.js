const models = require("../models");
const jwt = require("jsonwebtoken");
const { error } = require("../utils/apiResponse");

async function authMiddleware(req, res, next) {
  let token;

  if (req?.headers?.authorization?.startsWith("Bearer")) {
    token = req.headers.authorization.split(" ")[1];

    try {
      const decoded = jwt.verify(token, process.env.JWT_KEY);

      if (!decoded.userId) {
        return error(res, "UnAuthenticated");
      }

      const user = await models.User.findByPk(decoded?.userId);

      if (user.refreshToken !== null) {
        req.userData = user;
        // console.log(req.userData.id);

        next();
        return;
      }
    } catch (err) {
      return error(res, err.message);
    }
  }

  return error(res, "Unauthenticated");
}

module.exports = authMiddleware;
