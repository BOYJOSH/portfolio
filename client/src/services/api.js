const API_BASE = import.meta.env.VITE_API_URL || '';

export const api = {
  // GET /api/me
  getProfile: async () => {
    try {
      const res = await fetch(`${API_BASE}/api/me`);
      if (!res.ok) throw new Error('Failed to fetch profile');
      const data = await res.json();
      return data.data;
    } catch (err) {
      console.warn('Backend offline, using fallback:', err);
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
        ],
        skills: {
          languages: ['JavaScript (Node.js)', 'Python', 'SQL (PostgreSQL)', 'HTML5', 'CSS3'],
          frameworks: ['Express.js', 'Sequelize ORM', 'RESTful API Architecture'],
          databases: ['PostgreSQL 16+', 'Database Normalization', 'Relational Schemas'],
          security: ['JWT Auth', 'Bcrypt Hashing', 'Rate Limiting', 'Helmet'],
          tools: ['Git', 'GitHub', 'Postman', 'macOS Terminal / Zsh'],
        },
        contact: {
          email: 'softboyjosh27@gmail.com',
          whatsapp: '+2347014224561',
          github: 'https://github.com/boyjosh',
          linkedin: 'https://linkedin.com/in/connectwjosh',
          twitter: 'https://x.com/heis__josh',
        },
      };
    }
  },

  // GET /api/projects
  getProjects: async (category = '') => {
    try {
      const url = category ? `${API_BASE}/api/projects?category=${encodeURIComponent(category)}` : `${API_BASE}/api/projects`;
      const res = await fetch(url);
      if (!res.ok) throw new Error('Failed to fetch projects');
      const data = await res.json();
      return data.data;
    } catch (err) {
      console.warn('Backend unavailable, using cached projects fallback:', err);
      return [
        {
          id: '1',
          title: 'Distributed Auth & Session Microservice',
          slug: 'auth-session-microservice',
          tagline: 'High-throughput stateless JWT and refresh token service with role-based access control.',
          description: 'A modular authentication engine built with Node.js and Express. Implements cryptographically secure JWT issuance, refresh token rotation with sliding expiration, Argon2/Bcrypt password hashing, and brute-force protection with custom rate limiters.',
          techStack: ['Node.js', 'Express', 'PostgreSQL', 'Sequelize', 'JWT', 'Bcrypt', 'Postman'],
          category: 'Backend Architecture',
          githubUrl: 'https://github.com/boyjosh',
          liveUrl: null,
          featured: true,
        },
        {
          id: '2',
          title: 'E-Commerce Core REST API Engine',
          slug: 'ecommerce-rest-api',
          tagline: 'Scalable transactional RESTful API powering orders, inventory locks, and payment reconciliation.',
          description: 'Engineered a resilient transactional backend supporting ACID-compliant checkout pipelines using PostgreSQL transactions. Designed pagination, indexed full-text search, and normalized database schemas with Sequelize ORM.',
          techStack: ['Node.js', 'Express', 'PostgreSQL', 'Sequelize', 'REST APIs', 'Postman'],
          category: 'REST API',
          githubUrl: 'https://github.com/boyjosh',
          liveUrl: null,
          featured: true,
        },
        {
          id: '3',
          title: 'Python Asynchronous Task & Event Pipeline',
          slug: 'python-task-pipeline',
          tagline: 'Background job processing worker for data transformations and webhook delivery.',
          description: 'Built a lightweight asynchronous worker daemon in Python handling background task queuing, database batching, and automated retries with exponential backoff for external webhooks.',
          techStack: ['Python', 'PostgreSQL', 'REST APIs', 'Docker', 'Git'],
          category: 'Backend & Data',
          githubUrl: 'https://github.com/boyjosh',
          liveUrl: null,
          featured: false,
        },
        {
          id: '4',
          title: 'Modular MVC API Starter Kit',
          slug: 'modular-mvc-starter',
          tagline: 'Production-ready Node.js/Express template with strict layered separation of concerns.',
          description: 'An opinionated boilerplate featuring clean separation between routes, controllers, business services, and database models. Packaged with Helmet security headers, centralized error middleware, and automated validation.',
          techStack: ['Node.js', 'Express', 'Sequelize', 'JWT', 'Postman', 'Git'],
          category: 'Developer Tooling',
          githubUrl: 'https://github.com/boyjosh',
          liveUrl: null,
          featured: false,
        },
      ];
    }
  },

  // POST /api/messages
  sendMessage: async (data) => {
    const res = await fetch(`${API_BASE}/api/messages`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    const result = await res.json();
    if (!res.ok) {
      throw new Error(result.message || 'Failed to submit message');
    }
    return result;
  },
};
