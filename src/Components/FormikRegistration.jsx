import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormikControl from "./FormikControl";

function FormikRegistration() {
  const options = [
    { key: "Email", value: "emailmoc" },
    { key: "Telephone", value: "telephonemoc" },
  ];
  const initialValues = {
    email: "",
    password: "",
    confirmPassword: "",
    modeOfContact: "",
    phone: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email format").required("Required"),
    password: Yup.string().required("Required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), ""], "Passwords must match")
      .required("Required"),
    modeOfContact: Yup.string().required("Required"),
    phone: Yup.string().when("modeOfContact", {
      is: "telephonemoc",
      then: Yup.string().required("Required"),
    }),
  });

  const onSubmit = (values) => {
    console.log("Form data", values);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {(formik) => {
        return (
          <Form>
            <div className="my-3">
              {" "}
              <FormikControl
                control="input"
                type="email"
                label="Email"
                name="email"
              />
            </div>
            <div className="my-3">
              <FormikControl
                control="input"
                type="password"
                label="Password"
                name="password"
              />
            </div>
            <div className="my-3">
              {" "}
              <FormikControl
                control="input"
                type="password"
                label="Confirm Password"
                name="confirmPassword"
              />
            </div>
            <div className="my-3">
              <FormikControl
                control="radio"
                label="Mode of contact"
                name="modeOfContact"
                options={options}
              />
            </div>
            <div className="my-3">
              <FormikControl
                control="input"
                type="text"
                label="Phone number"
                name="phone"
              />
            </div>
            <button
              type="submit"
              className="btn btn-primary my-4"
              disabled={!formik.isValid}
            >
              Submit
            </button>
          </Form>
        );
      }}
    </Formik>
  );
}

export default FormikRegistration;
