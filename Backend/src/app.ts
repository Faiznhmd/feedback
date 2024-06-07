import express from 'express';
import globalError from './middleware/globalError';
import feedBackRouter from './routes/feedbackRouter';

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res, next) => {
  res.json({ message: 'API is Running' });
});

//global error handler
app.use('/feedback', feedBackRouter);
app.use(globalError);

export default app;
