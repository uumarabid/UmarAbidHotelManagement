// set conditions to display errors
export default function validateInfo(values) {
  let errors = {};
  let hasError = false;

  if (!values.user_name) {
    errors.user_name = "Username required";
    hasError = true;
  }

  if (!values.password) {
    errors.password = "Password is required";
    hasError = true;
  } else if (values.password.length < 8) {
    errors.password = "Password needs to be 8 characters or more";
    hasError = true;
  }

  // if (!values.password2) {
  //   errors.password2 = "Password is required";
  // } else if (values.password2 !== values.password) {
  //   errors.password2 = "Password do not match";
  // }

  return { errors, hasError };
}
