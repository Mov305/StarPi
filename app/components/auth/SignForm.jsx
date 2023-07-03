'use client';
import { useState } from 'react';

const SignForm = (props) => {
  return (
    <form action="#">
      <div className="mt-8 flex flex-col gap-4 text-sm md:text-base lg:text-lg">
        <p className="text-center text-lg lg:text-3xl font-medium">Sign in to your account</p>
        <div>
          <label htmlFor="email" className="sr-only">
            Email
          </label>
          <div className="relative">
            <input
              type="email"
              className="w-full rounded-lg border-gray-200 p-4 pe-12 shadow-sm"
              placeholder="Enter email"
            />
            <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                />
              </svg>
            </span>
          </div>
        </div>
        <div>
          <label htmlFor="password" className="sr-only">
            Password
          </label>
          <div className="relative">
            <input
              id="SignInPassword"
              type="password"
              className="w-full rounded-lg border-gray-200 p-4 pe-12 shadow-sm"
              placeholder="Enter password"
            />
            <span
              className="absolute inset-y-0 end-0 grid place-content-center px-4"
              onClick={() => {
                const password = document.getElementById('SignInPassword');
                password.type = password.type === 'password' ? 'text' : 'password';
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                />
              </svg>
            </span>
          </div>
        </div>
        <button
          type="submit"
          className="block w-full rounded-lg bg-indigo-600 px-5 py-3 font-medium text-white"
        >
          Sign in
        </button>
      </div>
    </form>
  );
};

export default SignForm;
