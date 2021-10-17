import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormikControl from "../Components/FormikControl";
import "../Components/FormikContainer.css";

function FormikContainer() {
  const dropdownOptions = [
    { key: "Select an option", value: "" },
    { key: "Option 1", value: "option1" },
    { key: "Option 2", value: "option2" },
    { key: "Option 3", value: "option3" },
  ];
  const radioOptions = [
    { key: "Option 1", value: "rOption1" },
    { key: "Option 2", value: "rOption2" },
    { key: "Option 3", value: "rOption3" },
  ];
  const checkboxOptions = [
    { key: "Option 1", value: "cOption1" },
    { key: "Option 2", value: "cOption2" },
    { key: "Option 3", value: "cOption3" },
  ];
  const initialValues = {
    email: "",
    description: "",
    selectOption: "",
    radioOption: "",
    checkboxOption: [],
    birthDate: null,
  };
  const validationSchema = Yup.object({
    email: Yup.string().required("Required"),
    description: Yup.string().required("Required"),
    selectOption: Yup.string().required("Required"),
    radioOption: Yup.string().required("Required"),
    checkboxOption: Yup.array().required("Required"),
    birthDate: Yup.date().required("Required").nullable(),
  });
  const onSubmit = (values) => {
    console.log("Form data", values);
    console.log("Saved data", JSON.parse(JSON.stringify(values)));
  };

  return (
    <div className="FormikContainer container text-center my-4">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {(formik) => (
          <Form>
            <div className="my-4">
              <FormikControl
                control="input"
                type="email"
                label="Email"
                name="email"
              />
            </div>
            <div className="my-4">
              {" "}
              <FormikControl
                control="textarea"
                label="Description"
                name="description"
              />
            </div>
            <div className="my-4">
              <FormikControl
                control="select"
                label="Select a topic"
                name="selectOption"
                options={dropdownOptions}
              />
            </div>
            <div className="my-4">
              <FormikControl
                control="radio"
                label="Radio topic"
                name="radioOption"
                options={radioOptions}
              />
            </div>
            <div className="my-4">
              {" "}
              <FormikControl
                control="checkbox"
                label="Checkbox topics"
                name="checkboxOption"
                options={checkboxOptions}
              />
            </div>
            <div className="my-4">
              <FormikControl
                control="date"
                label="Pick a date"
                name="birthDate"
              />
            </div>
            <button type="submit" className="btn btn-primary text-center">
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default FormikContainer;
