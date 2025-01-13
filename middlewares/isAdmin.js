const models = require("../models");
const { error } = require("../utils/apiResponse");
const authMiddleware = require("./authMiddleware");

async function isAdmin(req, res, next) {
  await authMiddleware(req, res, () => {
    if (req.userData?.role !== "admin") {
      return error(res, "You are not an admin");
    }

    next();
  });
}

module.exports = isAdmin;
