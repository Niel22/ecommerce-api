const registerUser = require("../action/auth/registerUser");
const loginUser = require("../action/auth/loginUser");
const fetchAllUser = require('../action/auth/fetchAllUser');
const fetchSingleUser = require('../action/auth/fetchSingleUser');
const deleteUser = require('../action/auth/deleteUser');
const updateUser = require('../action/auth/updateUser');
const { success, error } = require("../utils/apiResponse");
const userResource = require('../resource/userResource');
const blockUser = require("../action/auth/blockUser");
const unblockUser = require("../action/auth/unblockUser");
const refreshToken = require("../action/auth/refreshToken");
const logoutUser = require("../action/auth/logoutUser");
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

async function index(req, res)
{
  
  if(users = await fetchAllUser())
    {
    return success(res, userResource.collection(users));
  }

  return error(res, 'Users not found');
}

async function show(req, res)
{
  if(user = await fetchSingleUser(req.params.id))
  {
    return success(res, userResource.resource(user));
  }

  return error(res, "User not found");
}

async function update(req, res)
{
  if(await updateUser(req.params.id, req.userData))
  {
    return success(res, {}, "User Updated");
  }

  return error(res, "Cannot update user");
}

async function destroy(req, res)
{
  if(await deleteUser(req.params.id))
  {
    return success(res, {}, "User deleted");
  }

  return error(res, "Cannot delete user");
}

async function block(req, res)
{
  if(await blockUser(req.params.id))
  {
    return success(res, {}, "User Blocked");
  }

  return error(res, 'Cannot block user');
}

async function unblock(req, res)
{
  if(await unblockUser(req.params.id))
  {
    return success(res, {}, "User UnBlocked");
  }

  return error(res, 'Cannot unblock user');
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
  index,
  show,
  update,
  destroy,
  block,
  unblock,
  handleRefreshToken,
  logout
};
