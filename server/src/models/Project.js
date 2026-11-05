const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Project = sequelize.define(
  'Project',
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    slug: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    tagline: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    techStack: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      defaultValue: [],
      // Fallback getter/setter for dialect compatibility
      get() {
        const raw = this.getDataValue('techStack');
        return Array.isArray(raw) ? raw : (raw ? JSON.parse(raw) : []);
      },
      set(val) {
        this.setDataValue('techStack', Array.isArray(val) ? val : []);
      },
    },
    category: {
      type: DataTypes.STRING,
      defaultValue: 'Backend API',
    },
    githubUrl: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    liveUrl: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    featured: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    order: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = Project;
