const profileService = require('../services/profile.service');
const { successResponse } = require('../utils/apiResponse');

const getProfile = async (req, res, next) => {
  try {
    const profile = profileService.getProfile();
    return successResponse(res, 200, 'Profile retrieved successfully', profile);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getProfile,
};
