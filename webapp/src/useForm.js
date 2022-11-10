// custom hook

import { useEffect, useState } from "react";

const useForm = (callback, validateInfo) => {
  //useState current position "values" new postion "setValues"
  const [values, setvalues] = useState({
    username: "",
    email: "",
    password: "",
    password2: "",
  });

  // useState with errors
  const [errors, setErrors] = useState({});

  //state for submit is false for time being
  const [submit, setSubmit] = useState(false);

  // updaet the values, use envent handler and add inside the input element
  const handleChange = (e) => {
    setvalues({
      //spread operator--spreading the values first
      ...values,
      // targetting the name of each input of the form on FormSignUp
      [e.target.name]: e.target.value,
    });
  };

  // prevent refresh the page on submit
  const handleSubmit = (e) => {
    e.preventDefault();

    // display error values
    setErrors(validateInfo(values));

    // once is submited then it becomes true
    setSubmit(true);
  };

  //triger the error if not then submit request
  useEffect(() => {
    if (Object.keys(errors).length === 0 && submit) {
      callback();
    }
  }, [errors]);

  return { handleChange, values, handleSubmit, errors };
};

export default useForm;
