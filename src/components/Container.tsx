import React from 'react'

const Container = ({children} : {children : React.ReactNode}) => {
  return <div className="w-screen h-screen grid md:place-items-center bg-[#242742]">{children}</div>;
}

export default Container