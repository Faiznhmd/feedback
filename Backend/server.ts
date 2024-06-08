import app from './src/app';
import { config } from './src/config/config';
import connectD from './src/config/db';
import dotenv from 'dotenv';
import cors from 'cors';
import { notFound, errorHandler } from './src/middleware/errorMiddleware';

const startServer = async () => {
  await connectD();
  dotenv.config();

  const PORT = config.port || 3000;

  app.use(notFound);
  app.use(errorHandler);

  app.use(cors());

  app.listen(PORT, () => {
    console.log(`Server is running at ${PORT}`);
  });
};

startServer();
