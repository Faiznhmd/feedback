import app from './src/app';
import { config } from './src/config/db';

const startServer = () => {
  const PORT = config.port || 3000;

  app.listen(PORT, () => {
    console.log(`Server is running at ${PORT}`);
  });
};

startServer();
