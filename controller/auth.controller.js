const registerUser = require("../action/auth/registerUser");
const loginUser = require("../action/auth/loginUser");
const refreshToken = require("../action/auth/refreshToken");
const logoutUser = require("../action/auth/logoutUser");

const { success, error } = require("../utils/apiResponse");

async function register(req, res) 
{
  if (await registerUser(req.userData)) {
    return success(res, {}, "User Created");
  }

  return error(res, "User cannot be created");
}

async function login(req, res)
{
  if(user = await loginUser(req.userData))
  {
    res.cookie('refreshToken', user.refreshToken, {
      httpOnly: true,
      maxAge: 72*60*60*1000
    });

    return success(res, user, "User logged in");
  }

  return error(res, "Innvalid credentials");
}



async function handleRefreshToken(req, res)
{
  if(accessToken = await refreshToken(req.cookies))
  {
    return success(res, {accessToken: accessToken});
  }

  return error("Error Occured");
}

async function logout(req, res)
{
  console.log("Processing");
  if(await logoutUser(req.cookies))
  {
    res.clearCookie('refreshToken', {

      httpOnly: true,
      secure: true
    });
    
    return success(res, "User logged out");
  }
  res.clearCookie('refreshToken', {

    httpOnly: true,
    secure: true
  });
  return error(res, "Cannot log out");

}

module.exports = {
  register,
  login,
  handleRefreshToken,
  logout
};
