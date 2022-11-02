import React from "react";
import useForm from "./useForm";

const FormSignUp = () => {
  // extract the data from useForm
  const { handleChange, values } = useForm();

  return (
    <div>
      {/* come back to put action and method */}
      <form>
        <fieldset>
          <legend>Create your account</legend>
          <label for="username">Username</label>
          <input
            type="text"
            name="username"
            id="username"
            placeholder="Enter your username"
            value={values.username}
            onChange={handleChange}
          />

          <label for="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter your email"
            value={values.email}
            onChange={handleChange}
          />

          <label for="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Enter your password"
            value={values.password}
            onChange={handleChange}
          />

          <label for="password2">Confirm password</label>
          <input
            type="password"
            name="password2"
            id="password2"
            placeholder="Confirm your password"
            value={values.password2}
            onChange={handleChange}
          />

          <button type="submit">Sign up</button>
          <span>
            Already have an account? Login <a href="#">here</a>
          </span>
        </fieldset>
      </form>
    </div>
  );
};

export default FormSignUp;
