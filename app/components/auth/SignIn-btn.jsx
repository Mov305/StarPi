'use client';
import { useSession, signOut } from 'next-auth/react';
import Link from 'next/link';

const SignIn = () => {
  const { data: session } = useSession();
  if (session) {
    return (
      <div>
        <button onClick={signOut}>Sign out</button>
      </div>
    );
  } else {
    return (
      <div>
        <Link href="/signin">Sign in</Link>
      </div>
    );
  }
};

export default SignIn;
