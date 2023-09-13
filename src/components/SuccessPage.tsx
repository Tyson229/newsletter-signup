const SuccessPage = ({email}: {email: string | undefined}) => {
  return (
    <div className="w-full h-full md:w-1/2 md:h-1/2 flex flex-col bg-white gap-32 px-6 py-12">
      <div className="grow flex flex-col justify-center gap-7">
        <img src="src/assets/icon-success.svg" className="w-1/5" />
        <div className="font-bold text-5xl">Thanks for subscribing!</div>
        <div>
          A confirmation email has been sent to {email}. Please open it and
          click the button inside to confirm your subscription
        </div>
      </div>
      <button className="w-full p-4 mt-4 text-center text-white font-bold rounded-lg text-sm bg-[#242742]">
        Dismiss message
      </button>
    </div>
  );
};

export default SuccessPage;
