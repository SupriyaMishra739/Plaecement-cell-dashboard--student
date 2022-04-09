import { useState, useEffect } from "react";
import Validation1 from "./Validation1";

const UseForm1 = (submitForm) => {
  const [values, setValues] = useState({
    USN: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const [dataIsCorrect, setDataIsCorrect] = useState(false);

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };
  const handleFormSubmit = (event) => {
    event.preventDefault();
    setErrors(Validation1(values));
    setDataIsCorrect(true);
  };

  useEffect(() => {
    if (Object.keys(errors).length === 0 && dataIsCorrect) {
      submitForm(true);
    }
  }, [errors]);

  return { handleChange, handleFormSubmit, errors, values };
};
export default UseForm1;