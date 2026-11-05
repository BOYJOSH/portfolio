const sequelize = require('../config/database');
const User = require('./User');
const Project = require('./Project');
const Message = require('./Message');

const db = {
  sequelize,
  User,
  Project,
  Message,
};

module.exports = db;
