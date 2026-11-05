const { Project } = require('../models');

const getAllProjects = async (filter = {}) => {
  const where = {};
  if (filter.category) {
    where.category = filter.category;
  }
  if (typeof filter.featured === 'boolean') {
    where.featured = filter.featured;
  }

  return await Project.findAll({
    where,
    order: [
      ['order', 'ASC'],
      ['createdAt', 'DESC'],
    ],
  });
};

const getProjectByIdOrSlug = async (identifier) => {
  // Check if identifier is UUID
  const isUUID = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(identifier);
  
  if (isUUID) {
    return await Project.findByPk(identifier);
  }
  return await Project.findOne({ where: { slug: identifier } });
};

const createProject = async (data) => {
  // Auto-generate slug if not provided
  if (!data.slug && data.title) {
    data.slug = data.title
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-+|-+$/g, '');
  }
  return await Project.create(data);
};

const updateProject = async (id, data) => {
  const project = await Project.findByPk(id);
  if (!project) return null;
  return await project.update(data);
};

const deleteProject = async (id) => {
  const project = await Project.findByPk(id);
  if (!project) return false;
  await project.destroy();
  return true;
};

module.exports = {
  getAllProjects,
  getProjectByIdOrSlug,
  createProject,
  updateProject,
  deleteProject,
};
