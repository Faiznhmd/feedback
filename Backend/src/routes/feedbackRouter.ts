import express from 'express';
import {
  CreateFeedBack,
  DeleteFeedBack,
  UpdateFeedBack,
} from '../controllers/feedbackController';

const feedBackRouter = express.Router();

feedBackRouter.post('/', CreateFeedBack);
feedBackRouter.put('/:id', UpdateFeedBack);
feedBackRouter.delete('/:id', DeleteFeedBack);

export default feedBackRouter;
