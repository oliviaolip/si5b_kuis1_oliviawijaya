require('dotenv').config();
const express = require('express');
const cors = require('cors');

const logger = require('./middlewares/logger');
const { notFoundHandler, errorHandler } = require('./middlewares/errorHandler');
const laptopRoutes = require('./routes/laptopRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(logger);
app.use(cors({ origin: process.env.CORS_ORIGIN, methods: ['GET', 'POST', 'PUT', 'DELETE'] }));
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Server Express.js berjalan!');
});

app.use('/laptops', laptopRoutes);

app.use(notFoundHandler);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server berjalan di http://localhost:${PORT}`);
});