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
          title: 'JOD GADGETS Store & Platform',
          slug: 'jod-gadgets-store',
          tagline: 'Multi-page e-commerce web platform and inventory catalog for mobile devices & tech gadgets.',
          description: 'An interactive electronics and gadget retail platform showcasing smartphones, accessories, product specifications, and direct client ordering workflows. Developed with structured HTML5, responsive CSS3 layouts, and custom Python automation scripts.',
          techStack: ['HTML5', 'CSS3', 'JavaScript', 'Python', 'Git', 'GitHub'],
          category: 'Web & E-Commerce',
          githubUrl: 'https://github.com/BOYJOSH/JOD-GADGET',
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
          category: 'Backend Architecture',
          githubUrl: 'https://github.com/BOYJOSH/JOD-GADGET',
          liveUrl: null,
          featured: true,
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
