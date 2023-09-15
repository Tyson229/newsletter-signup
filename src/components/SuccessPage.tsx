import { useNavigate } from "react-router-dom";
import successLogo from "../assets/icon-success.svg";
import { animate, motion } from "framer-motion";
const SuccessPage = ({ email }: { email: string | undefined }) => {
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ y: 150 }}
      animate={{ y: 0 }}
      className="flex h-full w-full flex-col gap-32 bg-white px-6 py-12 md:aspect-square md:h-min md:w-min md:gap-10 md:rounded-3xl md:px-20 md:py-12"
    >
      <div className="flex w-full grow flex-col justify-center gap-7">
        <img src={successLogo} className="w-1/5" />
        <div className="text-5xl font-bold">Thanks for subscribing!</div>
        <div>
          A confirmation email has been sent to{" "}
          <span className="font-bold">{email}</span>. Please open it and click
          the button inside to confirm your subscription
        </div>
      </div>
      <button
        className="w-full rounded-lg bg-[#242742] p-4 text-center font-bold text-white transition duration-100 ease-in-out hover:bg-gradient-to-r hover:from-pink-500 hover:to-orange-500 hover:shadow-xl hover:shadow-red-300"
        onClick={() => navigate("/newsletter-signup")}
      >
        Dismiss message
      </button>
    </motion.div>
  );
};

export default SuccessPage;
