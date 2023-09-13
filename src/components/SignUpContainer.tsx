import { useState } from "react";
import SignUpBox from "./SignUpBox";
import SuccessPage from "./SuccessPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const SignUpContainer = () => {
  const [isFormSubmitted, setIsFormSubmitted] = useState<boolean>(false);
  const [signUpEmail, setSignUpEmail] = useState<string | undefined>();

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <SignUpBox
              setIsFormSubmitted={setIsFormSubmitted}
              setSignUpEmail={setSignUpEmail}
            />
          }
        >
          <Route
            path="success"
            element={<SuccessPage email={signUpEmail} />}
          />
        </Route>
      </Routes>
    </Router>
  );
};

export default SignUpContainer;
