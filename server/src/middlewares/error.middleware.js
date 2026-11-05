const { errorResponse } = require('../utils/apiResponse');

// 404 Route Not Found Middleware
const notFoundHandler = (req, res, next) => {
  return errorResponse(res, 404, `Endpoint not found - ${req.originalUrl}`);
};

// Global Error Handler Middleware
const errorHandler = (err, req, res, next) => {
  console.error('💥 Server Error:', err);

  // Sequelize validation error
  if (err.name === 'SequelizeValidationError') {
    const messages = err.errors.map((e) => e.message);
    return errorResponse(res, 400, 'Validation Error', messages);
  }

  // Sequelize unique constraint error
  if (err.name === 'SequelizeUniqueConstraintError') {
    const fields = err.errors.map((e) => `${e.path} already exists`);
    return errorResponse(res, 409, 'Conflict: Duplicate entry', fields);
  }

  // JWT error
  if (err.name === 'JsonWebTokenError') {
    return errorResponse(res, 401, 'Invalid authentication token');
  }

  // Default to 500
  const statusCode = err.statusCode || 500;
  const message = err.message || 'Internal Server Error';

  return errorResponse(
    res,
    statusCode,
    message,
    process.env.NODE_ENV === 'development' ? err.stack : null
  );
};

module.exports = {
  notFoundHandler,
  errorHandler,
};
