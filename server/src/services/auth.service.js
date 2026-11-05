const { User } = require('../models');
const { generateToken } = require('../utils/jwt');

const loginUser = async (email, password) => {
  const user = await User.findOne({ where: { email } });
  if (!user) {
    return { success: false, message: 'Invalid email or password' };
  }

  const isMatch = await user.comparePassword(password);
  if (!isMatch) {
    return { success: false, message: 'Invalid email or password' };
  }

  const token = generateToken({
    id: user.id,
    email: user.email,
    role: user.role,
  });

  return {
    success: true,
    token,
    user: {
      id: user.id,
      name: user.name,
      email: user.email,
      role: user.role,
    },
  };
};

module.exports = {
  loginUser,
};
