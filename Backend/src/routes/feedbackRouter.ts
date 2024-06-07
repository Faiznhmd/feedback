import express from 'express';
import {
  CreateFeedBack,
  DeleteFeedBack,
  UpdateFeedBack,
  GetAllfeedback,
} from '../controllers/feedbackController';

const feedBackRouter = express.Router();

feedBackRouter.get('/', GetAllfeedback);
feedBackRouter.post('/', CreateFeedBack);
feedBackRouter.put('/:id', UpdateFeedBack);
feedBackRouter.delete('/:id', DeleteFeedBack);

export default feedBackRouter;
