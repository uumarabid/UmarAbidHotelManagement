// set conditions to display errors
export default function validateInfo(values) {
  let errors = {};
  let hasError = false;
  if (!values.user_name.trim()) {
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

  // if (!values.phone) {
  //   errors.phone = "Phone number is required";
  // } else if (!/^([0-9]{3}-[0-9]{2}-[0-9]{3})/i.test(values.phone)) {
  //   errors.email = "Phone number is invalid!";
  // }

  return { errors, hasError };
}
