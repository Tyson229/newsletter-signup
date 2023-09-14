import React from "react";

const Container = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="grid h-screen w-screen bg-[#242742] md:place-items-center">
      {children}
    </div>
  );
};

export default Container;
