import User from '../models/user';
import Session from '../models/session';

// check if the user making the request is authenticated

export const isAdmin = async (token: string, user_id: string) => {
  try {
    const session = await Session.findOne({ sessionToken: token });
    if (user_id !== session?.userId.toString()) return false;
    const user = await User.findOne({ _id: session?.userId });
    if (user?.role === 'admin') {
      return true;
    }
    return false;
  } catch (error: any) {
    throw new Error(error);
  }
};
