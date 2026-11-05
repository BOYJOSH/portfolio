const projectService = require('../services/project.service');
const { successResponse, errorResponse } = require('../utils/apiResponse');

const getProjects = async (req, res, next) => {
  try {
    const { category, featured } = req.query;
    const filter = {};
    if (category) filter.category = category;
    if (featured !== undefined) filter.featured = featured === 'true';

    const projects = await projectService.getAllProjects(filter);
    return successResponse(res, 200, 'Projects fetched successfully', projects);
  } catch (error) {
    next(error);
  }
};

const getProject = async (req, res, next) => {
  try {
    const { identifier } = req.params;
    const project = await projectService.getProjectByIdOrSlug(identifier);

    if (!project) {
      return errorResponse(res, 404, 'Project not found');
    }

    return successResponse(res, 200, 'Project retrieved successfully', project);
  } catch (error) {
    next(error);
  }
};

const createProject = async (req, res, next) => {
  try {
    const { title, tagline, description, techStack, category, githubUrl, liveUrl, featured, order } = req.body;

    if (!title || !description || !tagline) {
      return errorResponse(res, 400, 'Title, tagline, and description are required');
    }

    const newProject = await projectService.createProject({
      title,
      tagline,
      description,
      techStack: Array.isArray(techStack) ? techStack : (typeof techStack === 'string' ? techStack.split(',').map((s) => s.trim()) : []),
      category,
      githubUrl,
      liveUrl,
      featured: Boolean(featured),
      order: order ? parseInt(order, 10) : 0,
    });

    return successResponse(res, 201, 'Project created successfully', newProject);
  } catch (error) {
    next(error);
  }
};

const updateProject = async (req, res, next) => {
  try {
    const { id } = req.params;
    const updated = await projectService.updateProject(id, req.body);

    if (!updated) {
      return errorResponse(res, 404, 'Project not found');
    }

    return successResponse(res, 200, 'Project updated successfully', updated);
  } catch (error) {
    next(error);
  }
};

const deleteProject = async (req, res, next) => {
  try {
    const { id } = req.params;
    const deleted = await projectService.deleteProject(id);

    if (!deleted) {
      return errorResponse(res, 404, 'Project not found');
    }

    return successResponse(res, 200, 'Project deleted successfully');
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getProjects,
  getProject,
  createProject,
  updateProject,
  deleteProject,
};
