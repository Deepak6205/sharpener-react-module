import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
const FormikForm = () => {
  const initialValues = {
    name: "",
    email: "",
    password: "",
  };
  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be of 6 character")
      .required("Password is required"),
  });
  const handleSubmit = (values, { resetForm }) => {
    console.log("form values :", values);
    alert("form submited");
    resetForm();
  };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <h1>Simple login form</h1>
          <div>
            <label>Name</label>
            <Field type="name" name="name" />
            <ErrorMessage
            name="name"
            component="p"
            />
          </div>
          <div>
            <label >Email</label>
            <Field type="email" name="email" />
            <ErrorMessage
            name="name"
            component="p"
            />
          </div>
          <div>
            <label>Password</label>
            <Field type="password" name="password" />
            <ErrorMessage
            component="p"
            name="password"/>
          </div>
          <div>
            <button type="submit">Submit</button>
          </div>
        </div>
      </Form>
    </Formik>
  );
};

export default FormikForm;
