import { FormEvent, useRef, useState } from "react";
import BulletPoint from "./BulletPoint";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
const SignUpBox = ({
  setSignUpEmail,
}: {
  setSignUpEmail: React.Dispatch<React.SetStateAction<string | undefined>>;
}) => {
  const emailInputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();
  const [isValid, setIsValid] = useState<boolean>(true);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const emailInput = emailInputRef.current?.value;
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/g;
    if (emailInput?.match(regex)) {
      setIsValid(true);
      setSignUpEmail(() => emailInput);
      navigate("success");
    } else {
      setIsValid(false);
      emailInputRef.current?.focus();
    }
    return;
  }

  return (
    <motion.div
      animate={{ scale: 1 }}
      whileInView={{ opacity: 1 }}
      className="grid h-full w-full grid-rows-3 bg-white md:flex md:h-fit md:w-4/6 md:flex-row-reverse md:gap-10 md:rounded-3xl md:p-6"
    >
      <div className="w-full bg-cover-mobile bg-cover bg-bottom md:bg-cover-desktop md:bg-center"></div>
      <div className="row-span-2 box-border flex w-full flex-col gap-8 px-6 py-8 font-sans ">
        <div className="grid w-full gap-6">
          <div className="text-[2.5rem] font-bold">Stay updated!</div>
          <div>Join 60,000+ product managers receiving monthly updates on:</div>
          <div className="grid gap-3">
            <BulletPoint content="Product discovery and building that matters" />
            <BulletPoint content="Measuring to ensure updates are a success" />
            <BulletPoint content="And much more!" />
          </div>
        </div>
        <form className="grid grow gap-2" onSubmit={handleSubmit}>
          <div className="space-y-1.5">
            <div className="flex justify-between">
              <span className="text-xs font-bold">Email addressed</span>
              <span
                className={`${
                  !isValid ? "text-xs font-bold	text-[#ff6257]" : "hidden"
                }`}
              >
                Valid email required
              </span>
            </div>
            <input
              ref={emailInputRef}
              className={`${
                isValid
                  ? "focus:outline-[#242742]"
                  : "focus:bg-[#ff6257]/10 focus:outline-red-300"
              } w-full rounded-lg border-2 border-gray-300 p-4`}
              placeholder="email@company.com"
            />
          </div>
          <button
            className="w-full rounded-lg bg-[#242742] p-4 text-center font-bold text-white transition duration-100 ease-in-out hover:bg-gradient-to-r hover:from-pink-500 hover:to-orange-500 hover:shadow-xl hover:shadow-red-300"
            type="submit"
          >
            Subscribe to monthly newsletter
          </button>
        </form>
      </div>
    </motion.div>
  );
};

export default SignUpBox;
