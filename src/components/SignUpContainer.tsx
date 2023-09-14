import { useState } from "react";
import SignUpBox from "./SignUpBox";
import SuccessPage from "./SuccessPage";
import { Routes, Route } from "react-router-dom";

const SignUpContainer = () => {
  const [signUpEmail, setSignUpEmail] = useState<string | undefined>();

  return (
    <Routes>
      <Route path="/newsletter-signup" element={<SignUpBox setSignUpEmail={setSignUpEmail} />} />

      <Route path="/success" element={<SuccessPage email={signUpEmail} />} />
    </Routes>
  );
};

export default SignUpContainer;
