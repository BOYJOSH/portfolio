const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const apiRoutes = require('./routes');
const { notFoundHandler, errorHandler } = require('./middlewares/error.middleware');

const app = express();

// Security middleware
app.use(helmet());

// CORS configuration
const allowedOrigins = [
  process.env.CLIENT_URL,
  'http://localhost:5173',
  'http://localhost:3000',
  'http://localhost:5174',
  'https://portfolio-blush-five-aqa5ykb541.vercel.app',
].filter(Boolean);

app.use(
  cors({
    origin: (origin, callback) => {
      // Allow requests with no origin (like Postman or mobile apps)
      if (!origin) return callback(null, true);
      if (allowedOrigins.includes(origin) || origin.endsWith('.vercel.app')) {
        return callback(null, true);
      }
      return callback(new Error(`CORS: origin ${origin} not allowed`));
    },
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
  })
);

// Global rate limiting (100 requests per 15 minutes)
const globalLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  standardHeaders: true,
  legacyHeaders: false,
});
app.use('/api', globalLimiter);

// Body parsing
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Simple request logger for development
if (process.env.NODE_ENV === 'development') {
  app.use((req, res, next) => {
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
    next();
  });
}

// API Routes
app.use('/api', apiRoutes);

// Root greeting endpoint
app.get('/', (req, res) => {
  res.status(200).json({
    status: 'ONLINE',
    author: 'Oluwadamilare',
    role: 'Backend Developer',
    apiDocumentation: '/api/me, /api/projects, /api/messages, /api/health',
  });
});

// 404 handler
app.use(notFoundHandler);

// Global error handler
app.use(errorHandler);

module.exports = app;
