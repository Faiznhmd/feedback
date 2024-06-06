import { Response, Request, NextFunction } from 'express';

const CreateFeedBack = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  res.json({ message: 'Create Feedback' });
};

export { CreateFeedBack };
