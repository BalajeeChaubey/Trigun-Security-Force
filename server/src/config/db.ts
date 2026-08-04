import mongoose from 'mongoose';
import { env } from './env.js';

export const connectDb = async () => {
  try {
    await mongoose.connect(env.mongoUri, { autoIndex: true });
    console.log('MongoDB connected');
  } catch (error) {
    console.warn('MongoDB connection skipped or failed:', error instanceof Error ? error.message : error);
  }
};
