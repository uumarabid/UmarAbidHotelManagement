// custom hook

import { useState } from "react";

const useForm = () => {
  //useState current position "values" new postion "setValues"
  const [values, setvalues] = useState({
    username: "",
    email: "",
    password: "",
    password2: "",
  });

  // useState with errors
  const [errors, setErrors] = useState({});

  // updaet the values, use envent handler and add inside the input element
  const handleChange = (e) => {
    setvalues({
      //spreading the values first
      ...values,
      // targetting the name of each input of the form on FormSignUp
      [e.target.name]: e.target.values,
    });
  };

  return { handleChange, values };
};

export default useForm;
