import express from 'express';
import globalError from './middleware/globalError';

const app = express();

app.get('/', (req, res, next) => {
  res.json({ message: 'API is Running' });
});

//global error handler
app.use(globalError);

export default app;
