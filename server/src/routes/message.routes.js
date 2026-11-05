const express = require('express');
const router = express.Router();
const rateLimit = require('express-rate-limit');
const messageController = require('../controllers/message.controller');
const { authenticate, authorizeAdmin } = require('../middlewares/auth.middleware');

// Strict rate limiter for contact form submissions to prevent spam (max 5 requests per 15 minutes per IP)
const messageLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 5,
  message: {
    success: false,
    message: 'Too many messages submitted from this IP, please try again after 15 minutes.',
  },
  standardHeaders: true,
  legacyHeaders: false,
});

// Public submission
router.post('/', messageLimiter, messageController.sendMessage);

// Protected retrieval & updates (Admin only)
router.get('/', authenticate, authorizeAdmin, messageController.getMessages);
router.patch('/:id/read', authenticate, authorizeAdmin, messageController.markAsRead);

module.exports = router;
