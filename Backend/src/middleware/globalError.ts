import { HttpError } from 'http-errors';
import { Request, Response, NextFunction } from 'express';
import { config } from '../config/config';

const globalError = () => {
  (err: HttpError, req: Request, res: Response, next: NextFunction) => {
    const statusCode = err.statusCode || 500;

    return res.status(statusCode).json({
      message: err.message,
      errorStack: config.env === 'development' ? err.stack : '',
    });
  };
};

export default globalError;
