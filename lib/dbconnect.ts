import mongoose from 'mongoose';

// throw an error if the MONGO_URL environment variable is not set

if (!process.env.DATABASE_URL) {
  throw new Error('Please define the MONGO_URL environment variable inside .env.local');
}

const DB_URL = process.env.DATABASE_URL as string;

// declare global and assign mongoose to it

let globalWithMongoose = global as typeof globalThis & { mongoose: any };
let cached = globalWithMongoose.mongoose;

// check if there is a cached mongoose connection

if (!cached) {
  cached = globalWithMongoose.mongoose = { conn: null, promise: null };
}

const dbConnect = async () => {
  if (cached.conn) {
    // if there is a cached mongoose connection, return it
    return cached.conn;
  }

  if (!cached.promise) {
    const opts: any = {
      useUnifiedTopology: true,
    };
    // if there is no cached mongoose connection, create one

    try {
      cached.promise = await mongoose.connect(DB_URL, opts);
    } catch (error) {
      throw new Error('Failed to stablish connection to the database');
    }
  }
  cached.conn = await cached.promise;

  return cached.conn;
};

export default dbConnect;
