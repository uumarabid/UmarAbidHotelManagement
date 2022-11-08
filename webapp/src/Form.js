import React from "react";
import FormSignUp from "./FormSignUp";
import { useState } from "react";
import LoginForm from "./LoginForm.js";

export const Form = () => {
  const [submitted, isSubmitted] = useState(false);

  function submitForm() {
    isSubmitted(true);
  }
  return (
    <div>
      {/* <FormSignUp /> */}
      {!submitted ? <FormSignUp submitForm={submitForm} /> : <LoginForm />}
    </div>
  );
};

export default Form;
