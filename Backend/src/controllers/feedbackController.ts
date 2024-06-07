import { NextFunction, Request, Response } from 'express';
import Feedback from '../models/feedbackmodel';

const CreateFeedBack = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { text, rating } = req.body;

  if (!text || typeof text !== 'string') {
    res.status(400);
    throw new Error('Text is required and should be a string');
  }
  if (
    rating === undefined ||
    typeof rating !== 'number' ||
    rating < 1 ||
    rating > 10
  ) {
    res.status(400);
    throw new Error(
      'Rating is required and should be a number between 1 and 10'
    );
  }
  const feedback = new Feedback({ text, rating });
  await feedback.save();

  res.status(201).json(feedback);
};

const DeleteFeedBack = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  res.json({ message: 'Deletefeedback' });
};

const UpdateFeedBack = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;
  const { text, rating } = req.body;

  if (text !== undefined && typeof text !== 'string') {
    res.status(400);
    throw new Error('Text should be a string.');
  }

  if (
    rating !== undefined &&
    (typeof rating !== 'number' || rating < 1 || rating > 10)
  ) {
    res.status(400);
    throw new Error('Rating should be a number between 1 and 10');
  }

  const feedback = await Feedback.findByIdAndUpdate(
    id,
    { text, rating },
    { new: true }
  );

  if (!feedback) {
    res.status(404);
    throw new Error('Feedback not found.');
  }

  res.status(200).json(feedback);
};

export { CreateFeedBack, DeleteFeedBack, UpdateFeedBack };
