import { config } from 'dotenv';
import express, { Request, Response, NextFunction } from 'express';
import { HttpError } from 'http-errors';

const app = express();

app.get('/', (req, res, next) => {
  res.json({ message: 'API is Running' });
});

//global error handler

app.use((err: HttpError, req: Request, res: Response, next: NextFunction) => {
  const statusCode = err.statusCode || 500;

  return res.status(statusCode).json({
    message: err.message,
    errorStack: config.env === 'development' ? err.stack : '',
  });
});

export default app;
