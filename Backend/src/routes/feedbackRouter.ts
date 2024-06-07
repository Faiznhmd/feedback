import express from 'express';
import {
  CreateFeedBack,
  DeleteFeedBack,
  UpdateFeedBack,
} from '../controllers/feedbackController';

const feedBackRouter = express.Router();

feedBackRouter.post('/', CreateFeedBack);
feedBackRouter.route('/:id').put(UpdateFeedBack).delete(DeleteFeedBack);

export default feedBackRouter;
