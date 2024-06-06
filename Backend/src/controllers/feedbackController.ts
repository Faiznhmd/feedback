import { NextFunction, Request, Response } from 'express';

const CreateFeedBack = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  res.json({ message: 'Create Feedback' });
};

const DeleteFeedBack = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  res.json({ message: 'Create Feedback' });
};

const UpdateFeedBack = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  res.json({ message: 'Create Feedback' });
};

export { CreateFeedBack, DeleteFeedBack, UpdateFeedBack };
