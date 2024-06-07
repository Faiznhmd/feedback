import { NextFunction, Request, Response } from 'express';
import { config } from '../config/config';

const notFound = (req: Request, res: Response, next: NextFunction) => {
  const error = new Error(`Not Found -${req.originalUrl}`);
  res.status;
  Number(404);
  next(error);
};

const errorHandler = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  let message = err.message;

  if (err.name === 'CastError' && err.Kind === 'ObjectId') {
    message = `Resource not Found`;
    statusCode = 404;
  }
  res.status(statusCode).json({
    message,
    stack: config.env === 'production' ? '*' : err.stack,
  });
};
export { notFound, errorHandler };
