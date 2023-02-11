// set conditions to display errors
const validateInfo = (values) => {
  let errors = {};
  let hasError = false;

  if (!values.first_name) {
    errors.first_name = "First name required";
    hasError = true;
  }
  if (!values.last_name) {
    errors.last_name = "Last name required";
    hasError = true;
  }

  if (!values.personal_email) {
    errors.personal_email = "Email required";
    hasError = true;
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.personal_email)) {
    errors.personal_email = "Email address is invalid!";
    hasError = true;
  }

  if (!values.company_email) {
    errors.company_email = "Email required";
    hasError = true;
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.company_email)) {
    errors.company_email = "Email address is invalid!";
    hasError = true;
  }

  if (!values.phone) {
    errors.phone = "Phone number is required";
    hasError = true;
  }

  return { errors, hasError };
};

export default validateInfo;
