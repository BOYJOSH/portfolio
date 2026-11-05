require('dotenv').config();
const http = require('http');
const app = require('./app');
const { sequelize } = require('./models');
const { seedDatabase } = require('./utils/seedData');

const PORT = process.env.PORT || 5001;
const server = http.createServer(app);

const startServer = async () => {
  try {
    console.log('⏳ Connecting to PostgreSQL database...');
    await sequelize.authenticate();
    console.log('✅ PostgreSQL connection established successfully.');

    // Sync database models (creates tables if they do not exist)
    console.log('⏳ Synchronizing database models...');
    await sequelize.sync({ alter: true });
    console.log('✅ Database models synchronized.');

    // Seed initial data if tables are empty
    await seedDatabase();

    server.listen(PORT, () => {
      console.log(`🚀 Portfolio Backend running at: http://localhost:${PORT}`);
      console.log(`📡 Health Check: http://localhost:${PORT}/api/health`);
      console.log(`👨‍💻 Profile API:  http://localhost:${PORT}/api/me`);
      console.log(`📦 Projects API: http://localhost:${PORT}/api/projects`);
    });
  } catch (error) {
    console.error('❌ Failed to start server:', error);
    process.exit(1);
  }
};

// Graceful shutdown handling
const gracefulShutdown = () => {
  console.log('\n🛑 Received shutdown signal. Closing HTTP server and database pool...');
  server.close(async () => {
    try {
      await sequelize.close();
      console.log('🔒 Database connections closed. Process terminating cleanly.');
      process.exit(0);
    } catch (err) {
      console.error('Error during shutdown:', err);
      process.exit(1);
    }
  });
};

process.on('SIGINT', gracefulShutdown);
process.on('SIGTERM', gracefulShutdown);

startServer();
