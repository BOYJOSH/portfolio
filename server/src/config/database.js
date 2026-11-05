const path = require('path');
const { Sequelize } = require('sequelize');

// Load environment variables from both root .env.local (Neon) and server/.env
require('dotenv').config({ path: path.resolve(__dirname, '../../../.env.local') });
require('dotenv').config({ path: path.resolve(__dirname, '../../../.env') });
require('dotenv').config({ path: path.resolve(__dirname, '../../.env') });

let sequelize;

// Neon best practice: Use UNPOOLED connection for schema DDL/migrations & sync, or POOLED for query traffic
const dbUrl = process.env.DATABASE_URL_UNPOOLED || process.env.DATABASE_URL;

if (dbUrl) {
  // Production Neon PostgreSQL Configuration
  sequelize = new Sequelize(dbUrl, {
    dialect: 'postgres',
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
    logging: process.env.NODE_ENV === 'development' ? console.log : false,
    pool: {
      max: 10,
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
  });
} else {
  // Local development fallback
  sequelize = new Sequelize(
    process.env.DB_NAME || 'portfolio_db',
    process.env.DB_USER || 'oluwadamilare',
    process.env.DB_PASSWORD || '',
    {
      host: process.env.DB_HOST || '127.0.0.1',
      port: process.env.DB_PORT || 5432,
      dialect: 'postgres',
      logging: process.env.NODE_ENV === 'development' ? console.log : false,
      pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000,
      },
    }
  );
}

module.exports = sequelize;
