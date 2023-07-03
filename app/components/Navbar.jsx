'use client';

import Link from 'next/link';
import Image from 'next/image';
import SignIn from '@components/auth/SignIn-btn';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const path = usePathname();

  return (
    <nav className="flex items-center justify-between text-gray-600 right-0 fixed w-full shadow-lg dark:shadow-slate-800 z-10 bg-white/90 dark:bg-gray-900">
      <div className="py-3 px-12">
        <Link href="/">
          <Image src="/starpi.svg" width={150} height={150} />
        </Link>
      </div>

      {path !== '/signin' ? (
        <div className=" mx-5 py-2 px-2 text-xl rounded-full text-teal-700 border-teal-700 hover:bg-teal-700 hover:text-white border-2 transition">
          <SignIn />
        </div>
      ) : null}
    </nav>
  );
};

export default Navbar;
