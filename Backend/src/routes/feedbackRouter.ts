import express from 'express';
import {
  CreateFeedBack,
  DeleteFeedBack,
  UpdateFeedBack,
} from '../controllers/feedbackController';

const feedBackRouter = express.Router();

feedBackRouter
  .route('/')
  .post(CreateFeedBack)
  .delete(DeleteFeedBack)
  .put(UpdateFeedBack);

export default feedBackRouter;
