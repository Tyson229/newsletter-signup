import { FormEvent, useEffect, useRef, useState } from "react";
import BulletPoint from "./BulletPoint";

const SignUpBox = ({
  setIsFormSubmitted,
  setSignUpEmail,
}: {
  setIsFormSubmitted: React.Dispatch<React.SetStateAction<boolean>>;
  setSignUpEmail: React.Dispatch<React.SetStateAction<string | undefined>>;
}) => {
  const emailInputRef = useRef<HTMLInputElement>(null);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    console.log(emailInputRef.current?.value);
    setIsFormSubmitted(() => true);
    return;
  }


  return (
    <div className="w-full h-full md:w-1/2 md:h-1/2 flex flex-col md:grid md:grid-cols-2 bg-white">
      <img src="src/assets/illustration-sign-up-mobile.svg" className="" />
      <div className="flex flex-col w-full font-sans px-6 py-12 grow gap-8">
        <div className="font-bold text-4xl">Stay updated!</div>
        <div>Join 60,000+ product managers receiving monthly updates on:</div>
        <div className="grid place-items-start grow">
          <BulletPoint content="Product discovery and building that matters" />
          <BulletPoint content="Measuring to ensure updates are a success" />
          <BulletPoint content="And much more!" />
        </div>
        <form
          className="flex flex-col grow justify-end gap-2"
          onSubmit={handleSubmit}
        >
          <label className="font-bold text-xs">Email address</label>
          <input
            ref={emailInputRef}
            type="email"
            className="w-full p-4 border-2 border-gray-300 rounded-lg"
            placeholder="email@company.com"
          />
          <button
            className="w-full p-4 mt-4 text-center text-white font-bold rounded-lg text-sm bg-[#242742]"
            type="submit"
          >
            Subscribe to monthly newsletter
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUpBox;
