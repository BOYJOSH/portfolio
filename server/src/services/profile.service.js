/**
 * Profile Service
 * Powers the /api/me endpoint and the interactive Terminal hero card.
 */
const getProfile = () => {
  return {
    name: 'Ilelaboye Joshua Oluwadamilare',
    handle: '@boyjosh',
    title: 'Backend Software Engineer',
    institution: 'University of Lagos (UNILAG)',
    major: 'Computer Science',
    experience: '1 Year Production-Focused Backend Engineering',
    status: '200 OK — Ready to Ship',
    location: 'Lagos, Nigeria',
    bio: 'Computer Science undergraduate at the University of Lagos with 1 year of hands-on experience designing and implementing scalable backend architectures. Obsessed with high-throughput REST APIs, database normalization, layered MVC architecture, and secure authentication flows.',
    technicalFocus: [
      'Layered MVC Node.js / Express Services',
      'PostgreSQL Relational Design & Indexing',
      'Python Data Pipelines & Automation',
      'Stateless JWT Authentication & Security',
      'API Performance, Rate Limiting & Clean Error Handling',
    ],
    skills: {
      languages: ['JavaScript (Node.js)', 'Python', 'SQL (PostgreSQL)', 'HTML5', 'CSS3'],
      frameworks: ['Express.js', 'Sequelize ORM', 'RESTful API Architecture'],
      databases: ['PostgreSQL 16+', 'Database Normalization (1NF-3NF)', 'Relational Schemas'],
      security: ['JWT Auth', 'Bcrypt Hashing', 'Rate Limiting', 'Helmet'],
      tools: ['Git', 'GitHub', 'Postman', 'macOS Terminal / Zsh'],
    },
    metrics: {
      preferredArchitecture: 'Layered MVC Pattern',
      databaseEngine: 'PostgreSQL 16',
      availability: 'Available for Full-Time & Internship Backend Roles',
    },
    contact: {
      email: 'softboyjosh27@gmail.com',
      whatsapp: '+2347014224561',
      github: 'https://github.com/boyjosh',
      linkedin: 'https://linkedin.com/in/connectwjosh',
      twitter: 'https://x.com/heis__josh',
    },
    systemSpecs: {
      platform: 'macOS (Apple Silicon M1 Pro)',
      memory: '16GB Unified RAM',
    },
  };
};

module.exports = {
  getProfile,
};
