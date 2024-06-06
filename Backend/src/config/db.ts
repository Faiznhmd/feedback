import mongoose from 'mongoose';
import { config } from './config';

const connectDB = async () => {
  try {
    const connect = await mongoose.connect(config.dataBaseUrl as string);
    console.log(`MongoDB Connected: ${connect.connection.host}`);
  } catch (error) {
    console.error('Error');
    process.exit(1);
  }
};

export default connectDB;
