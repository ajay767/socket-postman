const dotenv = require('dotenv');
dotenv.config({ path: './config.env' });
const express = require('express');
const morgan = require('morgan');
const xss = require('xss-clean');
const cors = require('cors');
const compression = require('compression');
const AppError = require('./utils/AppError');
const userRoute = require('./routes/userRoute');
const globalErrorHandler = require('./controller/errorController');

const app = express();

app.use(cors());
// Development logging
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

// Body parser, reading data from body into req.body
app.use(express.json({ limit: '10kb' }));
app.use(express.urlencoded({ extended: true, limit: '10kb' }));

// Data sanitization against XSS
app.use(xss());

app.use(compression());

//routes
app.use('/api/v1/auth', userRoute);

app.all('*', (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});

app.use(globalErrorHandler);

module.exports = app;
