import { config } from './config';
import mongoose from 'mongoose';

const connectD = async () => {
  try {
    mongoose.connection.on('conneced', () => {
      console.log('Connected to Database Successfully');
    });

    mongoose.connection.on('error', (err) => {
      console.log('Error in connecting to Database', err);
    });

    await mongoose.connect(config.dataBaseUrl as string);
  } catch (err) {
    console.log('Failed to connect to Database', err);
    process.exit(1);
  }
};
export default connectD;
