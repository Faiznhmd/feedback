import express from 'express';
import globalError from './middleware/globalError';
import feedBackRouter from './routes/feedbackRouter';

const app = express();

app.get('/', (req, res, next) => {
  res.json({ message: 'API is Running' });
});

//global error handler
app.use(globalError);
app.use('/feedback', feedBackRouter);

export default app;
