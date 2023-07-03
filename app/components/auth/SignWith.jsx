'use client';
import { signIn } from 'next-auth/react';
import { FcGoogle } from 'react-icons/fc';
import { FaFacebook, FaDiscord } from 'react-icons/fa';

const GoogleSignIn = () => {
  const sharedClasses = ' p-4 text-2xl lg:text-4xl rounded-full border-2 transition ';
  return (
    <div className="mt-5">
      <p className="text-center">
        <span className=" text-lg lg:text-2xl ">Sign in with</span>
      </p>
      <div className="flex gap-4 items-center justify-center p-6 transition">
        <button
          onClick={() => signIn('google', { callbackUrl: '/' })}
          className={'bg-white border-red-600 border google-btn hover:bg-red-600' + sharedClasses}
        >
          <FcGoogle />
        </button>
        <button
          onClick={() => signIn('facebook', { callbackUrl: '/' })}
          className={
            'text-blue-700 hover:text-white hover:bg-blue-600 border-blue-600' + sharedClasses
          }
        >
          <FaFacebook />
        </button>
        <button
          onClick={() => signIn('discord', { callbackUrl: '/' })}
          className={
            'text-indigo-500 hover:text-white hover:bg-indigo-500 border-indigo-500' + sharedClasses
          }
        >
          <FaDiscord />
        </button>
      </div>
    </div>
  );
};

export default GoogleSignIn;
