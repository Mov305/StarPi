'use client';
import { useSession } from 'next-auth/react';
import { redirect } from 'next/navigation';

const ProtectedRoute = ({ children, role }) => {
  const { data: session, status } = useSession();
  if (status === 'loading') {
    return null;
  }

  const checkIfLoggedIn = () => {
    if (!session?.user) {
      redirect('/signin');
    }
  };

  const checkIfAdmin = () => {
    if (role === 'admin' && session?.user?.role !== 'admin') {
      redirect('/');
    }
  };

  checkIfLoggedIn();
  checkIfAdmin();

  return children;
};

export default ProtectedRoute;
