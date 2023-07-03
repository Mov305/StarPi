import SignIn from '@components/auth/SignIn-btn';
import GoogleSignIn from '@components/auth/GoogleSignin-btn';

const Page = () => {
  return (
    <div className="flex flex-col bg-slate-400/40 items-center justify-center">
      <SignIn />
      <GoogleSignIn />
    </div>
  );
};

export default Page;
