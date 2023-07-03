import { redirect } from 'next/navigation';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';

const Layout = async ({ children }) => {
  const session = await getServerSession(authOptions);
  if (session?.user) {
    redirect('/');
  }
  return children;
};

export default Layout;
