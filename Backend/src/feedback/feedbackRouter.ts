import express from 'express';
import { CreateFeedBack } from './feedbackController';

const feedBackRouter = express.Router();

feedBackRouter.post('/', CreateFeedBack);

export default feedBackRouter;
