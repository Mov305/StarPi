import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import FaceBookProvider from 'next-auth/providers/facebook';
import DicordProvider from 'next-auth/providers/discord';
import { MongoDBAdapter } from '@next-auth/mongodb-adapter';
import clientPromise from '@/lib/mongodb';

const scopes = ['identify'].join(' ');

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
      profile: (profile) => CreateUser(profile, 'G'),
    }),
    FaceBookProvider({
      clientId: process.env.FACEBOOK_ID,
      clientSecret: process.env.FACEBOOK_SECRET,
      profile: (profile) => CreateUser(profile),
    }),
    DicordProvider({
      clientId: process.env.DISCORD_ID,
      clientSecret: process.env.DISCORD_SECRET,
      authorization: { params: { scope: scopes } },
      profile: (profile) => CreateUser(profile),
    }),
  ],

  secret: process.env.NEXTAUTH_URL,
  // debug: process.env.NODE_ENV === 'development',

  adapter: MongoDBAdapter(clientPromise),

  callbacks: {
    session: async ({ session, user }) => {
      session.user.id = user.id;
      session.user.role = user.role;
      return session;
    },
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };

const CreateUser = (user, provider = 'NG') => {
  console.log(user, 'user');
  const userObj = {
    role: 'user',
    address: {},
    cart: [],
    orders: [],
    wishlist: [],
    phone: '',
  };
  if (provider === 'G') {
    userObj.id = user.sub;
  }
  return { ...userObj, ...user };
};
