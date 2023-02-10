// set conditions to display errors
export default function validateInfo(values) {
  let errors = {};

  if (!values.fname) {
    errors.fname = "First name required";
  }
  if (!values.lname) {
    errors.lname = "Last name required";
  }

  if (!values.personalEmail) {
    errors.personalEmail = "Email required";
    // complete this
    // (/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)
  } else if (!/^/i.test(values.personalEmail)) {
    errors.personalEmail = "Email address is invalid!";
  }

  if (!values.companyEmail) {
    errors.companyEmail = "Email required";
    // complete this
    // (/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)
  } else if (!/^/i.test(values.companyEmail)) {
    errors.companyEmail = "Email address is invalid!";
  }

  if (!values.phone) {
    errors.phone = "Phone number is required";
  }

  return errors;
}
