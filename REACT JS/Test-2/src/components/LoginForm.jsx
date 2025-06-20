import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const LoginForm = () => {
  const navigate = useNavigate();

  const initialValues = {
    email: "",
    password: "",
    keepLoggedIn: false,
  };

  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email format")
      .matches(
        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
        "Email must be a Gmail address"
      )
      .required("Enter email"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Enter password"),
  });

  const onSubmit = (values) => {
    console.log("Login data:", values);
    navigate("/login");
  };

  return (
    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
      {() => (
        <Form className="my-4" style={{ width: "100%", maxWidth: "400px", padding: "20px" }} autoComplete="off">
          <h2 className="mb-2">Welcome back</h2>
          <p className="mb-3" style={{ fontSize: "0.9rem" }}>
            Travel like a local, begin connecting
          </p>

          <div className="mb-2">
            <Field
              type="text"
              name="email"
              className="form-control"
              placeholder="Enter your email"
              style={{ height: "45px" }}
            />
            <ErrorMessage name="email" component="small" className="text-danger" />
          </div>

          <div className="mb-2">
            <Field
              type="password"
              name="password"
              className="form-control"
              placeholder="Enter your password"
              style={{ height: "45px" }}
              autoComplete="new-password"
            />
            <ErrorMessage name="password" component="small" className="text-danger" />
          </div>

          <div className="mb-2 d-flex justify-content-between align-items-center">
            <div className="form-check">
              <Field type="checkbox" name="keepLoggedIn" className="form-check-input" id="keepLoggedIn" />
              <label className="form-check-label" htmlFor="keepLoggedIn">
                Keep me logged in
              </label>
            </div>
            <Link to="/forgot-password" style={{ color: "orange", fontSize: "0.8rem" }}>
              I forgot my password
            </Link>
          </div>

          <button
            type="submit"
            className="btn btn-primary w-100 mb-2"
            style={{ height: "45px", backgroundColor: "orange", border: "none" }}
          >
            Log in
          </button>

          <div className="d-flex align-items-center my-2">
            <hr className="flex-grow-1" />
            <span className="mx-2" style={{ fontSize: "0.8rem" }}>
              or
            </span>
            <hr className="flex-grow-1" />
          </div>

          <Link
            to="/facebook-login"
            className="btn btn-primary w-100 mb-2 d-flex align-items-center justify-content-center"
            style={{ height: "40px", backgroundColor: "rgb(59, 89, 152)", border: "none" }}
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_%282019%29.png"
              alt="Facebook Logo"
              style={{ width: "20px", height: "20px", marginRight: "10px" }}
            />
            Log in with Facebook
          </Link>

          <Link
            to="/google-login"
            className="btn btn-light w-100 d-flex align-items-center justify-content-center"
            style={{
              height: "40px",
              border: "1px solid rgba(0, 0, 0, 0.1)",
              color: "black",
              marginTop: "20px",
              marginBottom: "60px",
            }}
          >
            <img
              src="https://developers.google.com/identity/images/g-logo.png"
              alt="Google Logo"
              style={{ width: "20px", height: "20px", marginRight: "10px" }}
            />
            Log in with Google
          </Link>

          <hr style={{ border: "none", borderTop: "1px solid #ddd" }} />

          <div className="mt-2" style={{ fontSize: "0.85rem" }}>
            Don't have an account yet?{" "}
            <Link to="/travellingapp" style={{ color: "orange" }}>
              Join Travelling App
            </Link>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default LoginForm;
