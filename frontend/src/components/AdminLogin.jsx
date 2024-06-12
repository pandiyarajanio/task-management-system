import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AdminLogin = () => {
  const navigator = useNavigate();
  const initialValues = { email: "", password: "" };
  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email address").required("Required"),
    password: Yup.string().required("Required"),
  });

  const onSubmit = (values, { setSubmitting }) => {
    axios
      .post("http://127.0.0.1:8000/api/admin/login/", values)
      .then((response) => {
        alert("Login successful:");
        console.log("Login successful:", response.data);
        setSubmitting(false);
        navigator("/adminhomepage");
      })
      .catch((error) => {
        console.error("Error logging in:", error);
        setSubmitting(false);
      });
  };

  return (
    <>
      <h1 className="admin-login">ADMIN LOGIN</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        <Form className="form-labal">
          <label htmlFor="email" className="block mb-2 text-xl font-medium text-gray-900 dark:text-white">Email</label>
          <br />
          <Field id="email" name="email" type="email" className="bg-gray-50 border admininputboxSize border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
          <ErrorMessage name="email" component="div" />
          <br />
          <label htmlFor="password" className="block mb-2 text-xl font-medium text-gray-900 dark:text-white">Password</label>
          <br />
          <Field id="password" name="password" type="password" className="bg-gray-50 border admininputboxSize border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
          <ErrorMessage name="password" component="div" />
          <br />
          <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Login</button>
        </Form>
      </Formik>
    </>
  );
};

export default AdminLogin;
