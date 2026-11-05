const { User, Project } = require('../models');

const initialProjects = [
  {
    title: 'JOD GADGETS Store & Platform',
    slug: 'jod-gadgets-store',
    tagline: 'Multi-page e-commerce web platform and inventory catalog for mobile devices & tech gadgets.',
    description: 'An interactive electronics and gadget retail platform showcasing smartphones, accessories, product specifications, and direct client ordering workflows. Developed with structured HTML5, responsive CSS3 layouts, and custom Python automation scripts.',
    techStack: ['HTML5', 'CSS3', 'JavaScript', 'Python', 'Git', 'GitHub'],
    category: 'Web & E-Commerce',
    githubUrl: 'https://github.com/BOYJOSH/JOD-GADGET',
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
    category: 'Backend Architecture',
    githubUrl: 'https://github.com/BOYJOSH/JOD-GADGET',
    liveUrl: null,
    featured: true,
    order: 2,
  },
];

const seedDatabase = async () => {
  try {
    // 1. Seed Admin if not exists
    const adminEmail = process.env.ADMIN_EMAIL || 'admin@oluwadamilare.dev';
    const existingAdmin = await User.findOne({ where: { email: adminEmail } });

    if (!existingAdmin) {
      await User.create({
        name: process.env.ADMIN_NAME || 'Ilelaboye Joshua',
        email: adminEmail,
        password: process.env.ADMIN_PASSWORD || 'adminpassword123',
        role: 'admin',
      });
      console.log('✅ Admin user seeded successfully.');
    }

    // 2. Synchronize initial projects
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
