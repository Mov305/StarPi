import mongoose from 'mongoose';

const schema = mongoose.Schema;

const userSchema = new schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    emailVerified: {
      type: Date,
      default: Date.now,
    },
    picture: {
      type: String,
    },
    role: {
      type: String,
      default: 'user',
    },
    address: {
      type: Object,
    },
    cart: {
      type: Array,
    },
    orders: {
      type: Array,
    },
    wishlist: {
      type: Array,
    },
    phone: {
      type: String,
    },
  },
  // add the timestamps and make the schema dynamic
  { timestamps: true, strict: false },
);

const User = mongoose.models.User || mongoose.model('User', userSchema);

export default User;
