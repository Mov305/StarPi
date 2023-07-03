import mongoose from 'mongoose';
import { ObjectId } from 'mongodb';
const schema = mongoose.Schema;

const sessionSchema = new schema(
  {
    sessionToken: {
      type: String,
      required: true,
    },
    userId: {
      type: ObjectId,
      required: true,
    },
    expires: {
      type: Date,
      required: true,
    },
  }
);

const Session = mongoose.models.Session || mongoose.model('Session', sessionSchema);

export default Session;
