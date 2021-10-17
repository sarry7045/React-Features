import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormikControl from "./FormikControl";

function FormikEnrollment() {
  const dropdownOptions = [
    { key: "Select your course", value: "" },
    { key: "React", value: "react" },
    { key: "Angular", value: "angular" },
    { key: "Vue", value: "vue" },
  ];

  const checkboxOptions = [
    { key: "HTML", value: "html" },
    { key: "CSS", value: "css" },
    { key: "JavaScript", value: "javascript" },
  ];

  const initialValues = {
    email: "",
    bio: "",
    course: "",
    skills: [],
    courseDate: null,
  };

  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email format").required("Required"),
    bio: Yup.string().required("Required"),
    course: Yup.string().required("Required"),
    courseDate: Yup.date().required("Required").nullable(),
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
              <FormikControl
                control="input"
                type="email"
                label="Email"
                name="email"
              />
            </div>
            <div className="my-3">
              <FormikControl control="textarea" label="Bio" name="bio" />
            </div>
            <div className="my-3">
              <FormikControl
                control="select"
                label="Course"
                name="course"
                options={dropdownOptions}
              />
            </div>
            <div className="my-3">
              <FormikControl
                control="checkbox"
                label="Your skillset"
                name="skills"
                options={checkboxOptions}
              />
            </div>
            <div className="my-3">
              {" "}
              <FormikControl
                control="date"
                label="Course date"
                name="courseDate"
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

export default FormikEnrollment;
