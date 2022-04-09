import React from "react";
import UseForm1 from "./UseForm1";
import "./SignupForm1.css";
import { Link } from "@material-ui/core";
import { history } from "../../History";

const SignupForm1 = ({ submitForm }) => {
  const { handleChange, values, errors } = UseForm1(submitForm);
  const handleFormSubmit = () => {
    history.push({
      pathname: `./Home`,
    });
  };
  return (
    <div className="container">
      <div className="app-wrapper">
        <div>
          <h1 className="title">SIGNUP / LOGIN AS</h1>
        </div>

        <div>
          <button className="faculty" onClick={handleFormSubmit}>
            Faculty
          </button>
        </div>
        <div>
          <button className="student" onClick={handleFormSubmit}>
            Student
          </button>
        </div>
        <div>
          <button className="TPO" onClick={handleFormSubmit}>
            TPO
          </button>
        </div>
        <form className="form-wrapper">
          <div className="USN">
            <label className="label">Email</label>
            <input
              className="input"
              type="Email"
              name="Email"
              value={values.Email}
              onChange={handleChange}
            />
            {errors.Email && <p className="error">{errors.Email}</p>}
          </div>
          <div className="password">
            <label className="label">password</label>
            <input
              className="input"
              type="password"
              name="password"
              value={values.password}
              onChange={handleChange}
            />
            {errors.password && <p className="error">{errors.password}</p>}
          </div>
          <div>
            <button className="submit" onClick={handleFormSubmit}>
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignupForm1;