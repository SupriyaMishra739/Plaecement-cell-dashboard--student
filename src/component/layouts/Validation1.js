const Validation1 = (values) => {
    let errors = {};
  
    if (!values.Email) {
      errors.Email = "Email is required";
    } else if (values.Email.length === 10) {
      errors.Email = "Email is invalid.";
    }
    if (!values.password) {
      errors.password = "password is required.";
    } else if (values.password.length < 8) {
      errors.password = "password must be atleast eight characters.";
    }
  
    return errors;
  };
  
  export default Validation1;