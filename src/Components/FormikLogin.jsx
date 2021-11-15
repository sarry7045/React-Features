import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormikControl from "./FormikControl";
import FormikRegistration from "./FormikRegistration";
import FormikEnrollment from "./FormikEnrollment";

function FormikLogin() {
  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email format").required("Required"),
    password: Yup.string().required("Required"),
  });

  const onSubmit = (values) => {
    console.log("Form data", values);
  };

  return (
    <>
      <h4 className="text-center my-4"> Basic Forms Using Formik and Yup:</h4>
      <br />
      <div className="FormikContainer container my-4 text-center">
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {(formik) => {
            return (
              <Form>
                <FormikControl
                  control="input"
                  // control='chakraInput'
                  type="email"
                  label="Email"
                  name="email"
                />

                <div className="my-3">
                  <FormikControl
                    control="input"
                    type="password"
                    label="Password"
                    name="password"
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
      </div>
      <div className="FormikContainer container my-4">
        <FormikRegistration />
      </div>
      <div className="FormikContainer container my-4">
        {" "}
        <FormikEnrollment />
      </div>
    </>
  );
}

export default FormikLogin;
