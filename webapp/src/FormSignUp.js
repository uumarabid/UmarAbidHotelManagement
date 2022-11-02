import React from "react";

const FormSignUp = () => {
  return (
    <div>
      {/* come back to put action and method */}
      <form>
        <fieldset>
          <legend>Create your account</legend>
          <label for="username">Username</label>
          <input type="text" name="username" id="username" placeholder="Enter your username" />

          <label for="email">Email</label>
          <input type="email" name="email" id="email" placeholder="Enter your email" />

          <label for="password">Password</label>
          <input type="password" name="password" id="password" placeholder="Enter your password" />

          <label for="password2">Confirm password</label>
          <input type="password2" name="password2" id="password2" placeholder="Enter your password" />

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
