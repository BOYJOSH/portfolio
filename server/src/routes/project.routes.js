const express = require('express');
const router = express.Router();
const projectController = require('../controllers/project.controller');
const { authenticate, authorizeAdmin } = require('../middlewares/auth.middleware');

// Public routes
router.get('/', projectController.getProjects);
router.get('/:identifier', projectController.getProject);

// Protected routes (Admin only)
router.post('/', authenticate, authorizeAdmin, projectController.createProject);
router.put('/:id', authenticate, authorizeAdmin, projectController.updateProject);
router.delete('/:id', authenticate, authorizeAdmin, projectController.deleteProject);

module.exports = router;
