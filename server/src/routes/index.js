const express = require('express');
const router = express.Router();

const profileRoutes = require('./profile.routes');
const projectRoutes = require('./project.routes');
const messageRoutes = require('./message.routes');
const authRoutes = require('./auth.routes');

// API Health Check
router.get('/health', (req, res) => {
  res.status(200).json({
    status: 'UP',
    uptime: process.uptime(),
    timestamp: new Date().toISOString(),
    service: 'portfolio-backend-api',
  });
});

// Route registration
router.use('/me', profileRoutes);
router.use('/projects', projectRoutes);
router.use('/messages', messageRoutes);
router.use('/auth', authRoutes);

module.exports = router;
