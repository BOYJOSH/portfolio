const authService = require('../services/auth.service');
const { successResponse, errorResponse } = require('../utils/apiResponse');

const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return errorResponse(res, 400, 'Email and password are required');
    }

    const result = await authService.loginUser(email, password);
    if (!result.success) {
      return errorResponse(res, 401, result.message);
    }

    return successResponse(res, 200, 'Login successful', {
      token: result.token,
      user: result.user,
    });
  } catch (error) {
    next(error);
  }
};

const getMe = async (req, res, next) => {
  try {
    return successResponse(res, 200, 'Authenticated user', req.user);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  login,
  getMe,
};
