// set conditions to display errors
export default function validateInfo(values) {
  let errors = {};

  if (!values.fname) {
    errors.fname = "First name required";
  }
  if (!values.lname) {
    errors.lname = "Last name required";
  }

  if (!values.username.trim()) {
    errors.username = "Username required";
  }

  if (!values.email) {
    errors.email = "Email required";
    // complete this
    // (/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)
  } else if (!/^/i.test(values.email)) {
    errors.email = "Email address is invalid!";
  }

  if (!values.password) {
    errors.password = "Password is required";
  } else if (values.password.length < 8) {
    errors.password = "Password needs to be 8 characters or more";
  }

  if (!values.password2) {
    errors.password2 = "Password is required";
  } else if (values.password2 !== values.password) {
    errors.password2 = "Password do not match";
  }

  // if (!values.phone) {
  //   errors.phone = "Phone number is required";
  // } else if (!/^([0-9]{3}-[0-9]{2}-[0-9]{3})/i.test(values.phone)) {
  //   errors.email = "Phone number is invalid!";
  // }

  return errors;
}
