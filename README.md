# ⚡ boyjosh.dev — Backend Developer Portfolio

> **Full-Stack Developer Portfolio for Ilelaboye Joshua Oluwadamilare**  
> Computer Science Undergraduate at the University of Lagos (UNILAG) & Backend Software Engineer.

![Node.js](https://img.shields.io/badge/Node.js-18+-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Express](https://img.shields.io/badge/Express.js-MVC-000000?style=for-the-badge&logo=express&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-16-4169E1?style=for-the-badge&logo=postgresql&logoColor=white)
![Sequelize](https://img.shields.io/badge/Sequelize-ORM-52B0E7?style=for-the-badge&logo=sequelize&logoColor=white)
![React](https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)

---

## 🏗️ Architecture Overview

The application is structured as a **clean monorepo** separating the presentation client from the backend API engine:

```text
Portfolio/
├── client/                 # React 18 + Vite + Tailwind CSS Frontend
│   ├── src/
│   │   ├── components/     # Navbar, TerminalCard, ProjectCard, ThemeToggle, Footer
│   │   ├── sections/       # Hero, About, TechStack, Projects, Contact
│   │   └── services/       # API integration layer with fallback resilience
│   └── public/             # Profile media & static assets
│
└── server/                 # Node.js + Express (Strict Layered MVC Architecture)
    └── src/
        ├── config/         # Sequelize ORM & PostgreSQL connection pool
        ├── models/         # User (Admin), Project, Message
        ├── services/       # Isolated business logic & DB transactions
        ├── controllers/    # HTTP request/response handlers
        ├── routes/         # Express endpoint definitions
        ├── middlewares/    # JWT auth verification, Rate limiting, Error handlers
        ├── utils/          # JWT tokens, response formatters, seed scripts
        ├── app.js          # Express app & security pipeline (Helmet, CORS)
        └── server.js       # Database sync & HTTP server entry point
```

---

## 📡 API Endpoints

| Method | Endpoint | Access | Description |
|---|---|---|---|
| `GET` | `/api/health` | Public | Server uptime and health check |
| `GET` | `/api/me` | Public | Developer bio, skills, UNILAG status for terminal hero |
| `GET` | `/api/projects` | Public | Retrieves all projects from PostgreSQL (supports query filters) |
| `POST` | `/api/messages` | Public | Contact form submission (Rate limited to 5 req / 15 mins) |
| `POST` | `/api/auth/login` | Public | Admin login (returns signed JWT) |
| `POST` | `/api/projects` | Admin (JWT) | Create new project in PostgreSQL |
| `PUT` | `/api/projects/:id` | Admin (JWT) | Update existing project |
| `DELETE` | `/api/projects/:id` | Admin (JWT) | Remove project |

---

## 🚀 Local Development Setup

### Prerequisites
- [Node.js](https://nodejs.org) (v18+)
- [PostgreSQL](https://www.postgresql.org/) (or Postgres.app on macOS)

### 1. Database Setup
```bash
createdb portfolio_db
```

### 2. Backend Setup
```bash
cd server
cp .env.example .env
npm install
npm run dev
```
The server will boot on `http://localhost:5001`, synchronize all Sequelize models, and automatically seed initial project data.

### 3. Frontend Setup
In a new terminal:
```bash
cd client
npm install
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## 👨‍💻 Author

**Ilelaboye Joshua Oluwadamilare**  
- **GitHub**: [@boyjosh](https://github.com/boyjosh)  
- **LinkedIn**: [connectwjosh](https://linkedin.com/in/connectwjosh)  
- **Email**: [softboyjosh27@gmail.com](mailto:softboyjosh27@gmail.com)
