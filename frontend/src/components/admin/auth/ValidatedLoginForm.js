import React,  { useState } from "react";
import { Formik } from "formik";
import * as EmailValidator from "email-validator";  
import AuthService from "../../../services/AuthServices";
import { useNavigate } from "react-router-dom";

const ValidatedLoginForm = () => {
  
    const [message, setMessage] = useState("");
    const navigate = useNavigate();
    return (
        <Formik 
        initialValues={{ email: "", password: "" }}
        onSubmit={(values, { setSubmitting }) => {
          AuthService.login(values.email, values.password).then(
            () => {
                setSubmitting(false);
                navigate("/admin/dashboard");
                window.location.reload();
            },
            (error) => {
              const resMessage =
                (error.response &&
                  error.response.data &&
                  error.response.data.message) ||
                error.message ||
                error.toString();
              setSubmitting(false);
              setMessage(resMessage);
            }
          );
        }}
        validate={values => {
            let errors = {};
            if (!values.email) {
                errors.email = "Email is required";
            } else if (!EmailValidator.validate(values.email)) {
                errors.email = "Invalid email address.";
            }
            const passwordRegex = /(?=.*[0-9])/;
            if (!values.password) {
                errors.password = "Password is required";
            } else if (values.password.length < 6) {
                errors.password = "Password must be 6 characters long.";
            } else if (!passwordRegex.test(values.password)) {
                errors.password = "Invalid password. Must contain one number.";
            }
            return errors;
        }}
    >
        {props => {
            const {
                values,
                touched,
                errors,
                isSubmitting,
                handleChange,
                handleBlur,
                handleSubmit
            } = props;
            
            return (
                <>
                {message && (
                    <div className="form-group">
                      <div className="alert alert-danger" role="alert">
                        {message}
                      </div>
                    </div>
                  )}
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input
                        id="email"
                        name="email"
                        type="text"
                        placeholder="Enter your email"
                        value={values.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className="form-control"
                    />
                    {errors.email && touched.email && (
                        <div className="input-feedback mt-1">{errors.email}</div>
                    )}
                    </div>
                    <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input
                        id="password"
                        name="password"
                        type="password"
                        placeholder="Enter your password"
                        className="form-control"
                        value={values.password}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        autoComplete=''
                    />
                    {errors.password && touched.password && (
                    <div className="input-feedback mt-1">{errors.password}</div>
                    )}
                    </div>
                    <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
                        Login
                    </button>

                </form>
                </>
            );

        }}

    </Formik>
    );
}

export default ValidatedLoginForm;
