import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";

const DepartmentForm = () => {
  const initialValues = { department_name: "" };
  const validationSchema = Yup.object({
    department_name: Yup.string().required("Required"),
  });

  const onSubmit = (values, { setSubmitting }) => {
    console.log(values);
    axios
      .post("http://127.0.0.1:8000/departments/", values)
      .then((response) => {
        alert("Department added:");
        console.log(response.data);
        setSubmitting(false);
      })
      .catch((error) => {
        alert("Error adding department:")
        console.log( error);
        setSubmitting(false);
      });
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      <Form className="form-labal">
        <label htmlFor="department_name" className="block mb-2 text-xl font-medium text-gray-900 dark:text-white"
        >Department Name</label>
        <br />
        <Field id="department_name" name="department_name" className="bg-gray-50 border admininputboxSize border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
        <ErrorMessage name="department_name" component="div" />
        <br />
        <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Add Department</button>
      </Form>
    </Formik>
  );
};

export default DepartmentForm;
