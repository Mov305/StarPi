import SignFrom from '@components/auth/SignForm';
import SignWith from '@components/auth/SignWith';
import Link from 'next/link';
import Image from 'next/image';

const Page = () => {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
        <section className="relative flex h-56 items-end bg-gray-900 lg:col-span-5 lg:h-full xl:col-span-6">
          <img
            alt="Night"
            src="https://res.cloudinary.com/dyjiz4nff/image/upload/v1687789708/StarPi/dev/signin_page.jpg"
            className="absolute inset-0 h-full w-full object-cover opacity-80 z-0"
          />
          <div className="hidden lg:relative lg:block lg:p-12 bg-slate-500/25 backdrop-blur-sm">
            <Link className="block text-white brightness-0 invert" href="/">
              <span className="sr-only">Home</span>
              <Image src="/fav.svg" width={60} height={80} />
            </Link>
            <h2 className="mt-6 text-2xl font-bold text-white sm:text-3xl md:text-4xl">
              Welcome to StarPi 🛒
            </h2>
            <p className="mt-4 leading-relaxed text-white/90 text-lg">
            StarPi Ecommerce: Next.js-powered, MongoDB-backed. Unleash your online store's potential with a customized, seamless, and scalable shopping experience.
            </p>
          </div>
        </section>
        <main className="flex items-center justify-center px-8 py-8 lg:col-span-7 lg:py-12 xl:col-span-6">
          <div className="w-full px-8">
            <div className="relative -mt-16 block lg:hidden">
              <Link
                className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-white text-blue-600 dark:bg-gray-900 sm:h-20 sm:w-20"
                href="/"
              >
                <span className="sr-only">Home</span>
                <Image src="/fav.svg" width={60} height={80} />
              </Link>
              <h1 className="mt-2 text-2xl font-bold text-gray-900 dark:text-white sm:text-3xl md:text-4xl">
                Welcome to StarPi 🛒
              </h1>
              <p className="mt-4 leading-relaxed text-gray-500 dark:text-gray-400 text-sm sm:text-lg">
                StarPi Ecommerce: Next.js-powered, MongoDB-backed. Unleash your online store's
                potential with a customized, seamless, and scalable shopping experience.
              </p>
            </div>
            <SignFrom />
            <SignWith />
          </div>
        </main>
      </div>
    </section>
  );
};

export default Page;
