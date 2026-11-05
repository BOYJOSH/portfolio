const { User, Project } = require('../models');

const initialProjects = [
  {
    title: 'Distributed Auth & Session Microservice',
    slug: 'auth-session-microservice',
    tagline: 'High-throughput stateless JWT and refresh token service with role-based access control.',
    description: 'A modular authentication engine built with Node.js and Express. Implements cryptographically secure JWT issuance, refresh token rotation with sliding expiration, Argon2/Bcrypt password hashing, and brute-force protection with custom rate limiters.',
    techStack: ['Node.js', 'Express', 'PostgreSQL', 'Sequelize', 'JWT', 'Bcrypt', 'Postman'],
    category: 'Backend Architecture',
    githubUrl: 'https://github.com/boyjosh',
    liveUrl: null,
    featured: true,
    order: 1,
  },
  {
    title: 'E-Commerce Core REST API Engine',
    slug: 'ecommerce-rest-api',
    tagline: 'Scalable transactional RESTful API powering orders, inventory locks, and payment reconciliation.',
    description: 'Engineered a resilient transactional backend supporting ACID-compliant checkout pipelines using PostgreSQL transactions. Designed pagination, indexed full-text search, and normalized database schemas with Sequelize ORM.',
    techStack: ['Node.js', 'Express', 'PostgreSQL', 'Sequelize', 'REST APIs', 'Postman'],
    category: 'REST API',
    githubUrl: 'https://github.com/boyjosh',
    liveUrl: null,
    featured: true,
    order: 2,
  },
  {
    title: 'Python Asynchronous Task & Event Pipeline',
    slug: 'python-task-pipeline',
    tagline: 'Background job processing worker for data transformations and webhook delivery.',
    description: 'Built a lightweight asynchronous worker daemon in Python handling background task queuing, database batching, and automated retries with exponential backoff for external webhooks.',
    techStack: ['Python', 'PostgreSQL', 'REST APIs', 'Docker', 'Git'],
    category: 'Backend & Data',
    githubUrl: 'https://github.com/boyjosh',
    liveUrl: null,
    featured: false,
    order: 3,
  },
  {
    title: 'Modular MVC API Starter Kit',
    slug: 'modular-mvc-starter',
    tagline: 'Production-ready Node.js/Express template with strict layered separation of concerns.',
    description: 'An opinionated boilerplate featuring clean separation between routes, controllers, business services, and database models. Packaged with Helmet security headers, centralized error middleware, and automated validation.',
    techStack: ['Node.js', 'Express', 'Sequelize', 'JWT', 'Postman', 'Git'],
    category: 'Developer Tooling',
    githubUrl: 'https://github.com/boyjosh',
    liveUrl: null,
    featured: false,
    order: 4,
  },
];

const seedDatabase = async () => {
  try {
    // 1. Seed Admin if not exists
    const adminEmail = process.env.ADMIN_EMAIL || 'admin@oluwadamilare.dev';
    const existingAdmin = await User.findOne({ where: { email: adminEmail } });

    if (!existingAdmin) {
      await User.create({
        name: process.env.ADMIN_NAME || 'Oluwadamilare',
        email: adminEmail,
        password: process.env.ADMIN_PASSWORD || 'adminpassword123',
        role: 'admin',
      });
      console.log('✅ Admin user seeded successfully.');
    }

    // 2. Seed Projects if table is empty
    const projectCount = await Project.count();
    if (projectCount === 0) {
      await Project.bulkCreate(initialProjects);
      console.log('✅ Seed projects created successfully.');
    }
  } catch (error) {
    console.error('❌ Database seeding error:', error.message);
  }
};

module.exports = {
  initialProjects,
  seedDatabase,
};
