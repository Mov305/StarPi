import { MongoClient } from 'mongodb';

if (!process.env.DATABASE_URL) {
  throw new Error('Please define the MONGO_URL environment variable inside .env.local');
}

declare const global: any & { _mongoClientPromise?: Promise<MongoClient> };

let client: MongoClient;
let clientPromise: Promise<MongoClient>;

if (process.env.NODE_ENV === 'development') {
  if (!global._mongoClientPromise) {
    client = new MongoClient(process.env.DATABASE_URL, {});
    global._mongoClientPromise = client.connect();
  }
  clientPromise = global._mongoClientPromise;
} else {
  client = new MongoClient(process.env.DATABASE_URL, {});
  clientPromise = client.connect();

}

export default clientPromise;
