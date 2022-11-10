import React from "react";
import FormSignUp from "./FormSignUp";
import { useState } from "react";
import LoginForm from "./LoginForm";

export const Form = () => {
  const [submitted, setSubmitted] = useState(false);

  function submitForm() {
    setSubmitted(true);
  }
  return (
    <div>
      {/* FormSignUp  */}
      {!submitted ? <FormSignUp submitForm={submitForm} /> : <LoginForm />}
    </div>
  );
};

export default Form;
