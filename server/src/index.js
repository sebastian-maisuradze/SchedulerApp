const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');
const cors = require('cors');
require('dotenv').config();

const app = express();
const { PORT } = process.env || 1337;
const authRoute = require('./routes/auth');

const { notFound, errorHandler } = require('./middleware');

app.use(helmet());
app.use(express.json());
app.use(morgan('common'));
app.use(
  cors({
    origin: 'http://localhost:3000',
  }),
);

app.use('/api/auth', authRoute);

app.use(notFound);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
});
