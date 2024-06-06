import app from './src/app';
import { config } from './src/config/config';
import connectD from './src/config/db';

const startServer = async () => {
  await connectD();

  const PORT = config.port || 3000;

  app.listen(PORT, () => {
    console.log(`Server is running at ${PORT}`);
  });
};

startServer();
