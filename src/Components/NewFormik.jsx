import React, { useState } from "react";
import {
  Formik,
  Form,
  Field,
  ErrorMessage,
  FieldArray,
  FastField,
} from "formik";
import * as Yup from "yup";
import TextError from "./TextError";
import "../Components/Formik.css";

const initialValues = {
  name: "",
  email: "",
  channel: "",
  comments: "",
  address: "",
  social: {
    facebook: "",
    twitter: "",
  },
  phoneNumbers: ["", ""],
  phNumbers: [""],
};

const savedValues = {
  name: "Suraj Yadav",
  email: "Suraj@example.com",
  channel: "sarry7045",
  comments: "Welcome to Formik Tutorial",
  address: "Amboli Andheri",
  social: {
    facebook: "",
    twitter: "",
  },
  phoneNumbers: ["", ""],
  phNumbers: [""],
};

const onSubmit = (values, submitProps) => {
  console.log("Form data", values);
  console.log("submitProps", submitProps);
  submitProps.setSubmitting(false);
  submitProps.resetForm();
};

const validationSchema = Yup.object({
  name: Yup.string().required("Required"),
  email: Yup.string().email("Invalid email format").required("Required"),
  channel: Yup.string().required("Required"),
  comments: Yup.string().required("Required"),
});

const validateComments = (value) => {
  let error;
  if (!value) {
    error = "Required";
  }
  return error;
};

const NewFormik = () => {
  const [formValues, setFormValues] = useState(null);

  return (
    <>
      <div className="formik my-5 text-center">
        {" "}
        <Formik
          initialValues={formValues || initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
          enableReinitialize
          // validateOnChange={false}
          // validateOnBlur={false}
          // validateOnMount
        >
          {(formik) => {
            console.log("Formik props", formik);
            return (
              <Form>
                <div className="form-controll">
                  <label htmlFor="name">Name</label>
                  <Field
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Your Name"
                  />
                  <ErrorMessage name="name" component={TextError} />
                </div>

                <div className="form-controll">
                  <label htmlFor="email">Email</label>
                  <Field
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Your Email"
                  />
                  <ErrorMessage name="email">
                    {(error) => <div className="error">{error}</div>}
                  </ErrorMessage>
                </div>

                <div className="form-controll">
                  <label htmlFor="channel">Channel</label>
                  <Field
                    type="text"
                    id="channel"
                    name="channel"
                    placeholder="YouTube channel name"
                  />
                  <ErrorMessage name="channel" />
                </div>

                <div className="form-controll">
                  <label htmlFor="comments">Comments</label>
                  <Field
                    as="textarea"
                    id="comments"
                    name="comments"
                    placeholder="Comments"
                    validate={validateComments}
                  />
                  <ErrorMessage name="comments" component={TextError} />
                </div>

                <div className="form-controll">
                  <label htmlFor="address">Address</label>
                  <FastField name="address" placeholder="Address">
                    {({ field, form, meta }) => {
                      // console.log('Field render')
                      return (
                        <div>
                          <input type="text" {...field} />
                          {meta.touched && meta.error ? (
                            <div>{meta.error}</div>
                          ) : null}
                        </div>
                      );
                    }}
                  </FastField>
                  <ErrorMessage name="email" component={TextError} />
                </div>

                <div className="form-controll">
                  <label htmlFor="address">Address</label>
                  <FastField
                    as="textarea"
                    id="address"
                    name="address"
                    placeholder="Address"
                  >
                    {(props) => {
                      const { field, form, meta } = props;
                      console.log("Render props", props);
                      return (
                        <div>
                          <input type="text" id="address" {...field} />
                          {meta.touched && meta.error ? (
                            <div>{meta.error}</div>
                          ) : null}
                        </div>
                      );
                    }}
                  </FastField>
                  <ErrorMessage name="email" component={TextError} />{" "}
                </div>

                <div className="form-controll">
                  <label htmlFor="facebook">Facebook profile</label>
                  <Field
                    type="text"
                    id="facebook"
                    name="social.facebook"
                    placeholder="FaceBook Profile"
                  />
                </div>

                <div className="form-controll">
                  <label htmlFor="twitter">Twitter profile</label>
                  <Field
                    type="text"
                    id="twitter"
                    name="social.twitter"
                    placeholder="Twitter Profile"
                  />
                </div>

                <div className="form-controll">
                  <label htmlFor="primaryPh">Primary phone number</label>
                  <Field
                    type="text"
                    id="primaryPh"
                    name="phoneNumbers[0]"
                    placeholder="Primary Phone Number"
                  />
                </div>

                <div className="form-controll">
                  <label htmlFor="secondaryPh">Secondary phone number</label>
                  <Field
                    type="text"
                    id="secondaryPh"
                    name="phoneNumbers[1]"
                    placeholder="Secondary Phone Number"
                  />
                </div>

                <div className="form-controll">
                  <label>List of phone numbers</label>
                  <FieldArray name="phNumbers">
                    {(fieldArrayProps) => {
                      const { push, remove, form } = fieldArrayProps;
                      const { values } = form;
                      const { phNumbers } = values;
                      // console.log('fieldArrayProps', fieldArrayProps)
                      // console.log('Form errors', form.errors)

                      return (
                        <div>
                          {phNumbers.map((phNumber, index) => (
                            <div key={index}>
                              <Field name={`phNumbers[${index}]`} />
                              {index > 0 && (
                                <button
                                  type="button"
                                  className="btn btn-success my-2 mx-2"
                                  onClick={() => remove(index)}
                                >
                                  -
                                </button>
                              )}
                            </div>
                          ))}
                          <button
                            type="button"
                            className="btn btn-success my-2"
                            onClick={() => push("")}
                          >
                            +
                          </button>
                        </div>
                      );
                    }}
                  </FieldArray>
                </div>

                {/* <button
              type='button'
              onClick={() => formik.validateField('comments')}
            >
              Validate comments
            </button>
            <button
              type='button'
              onClick={() => formik.setFieldTouched('comments')}
            >
              Visit comments
            </button>
            <button type='button' onClick={() => formik.validateForm()}>
              Validate all
            </button>
            <button
              type='button'
              onClick={() =>
                formik.setTouched({
                  name: true,
                  email: true,
                  channel: true,
                  comments: true
                })
              }
            >
              Visit all
            </button> */}
                <button
                  type="button"
                  className="btn btn-primary mx-4"
                  onClick={() => setFormValues(savedValues)}
                >
                  Load saved data
                </button>
                <button type="reset" className="btn btn-primary mx-4">
                  Reset
                </button>
                <button
                  type="submit"
                  className="btn btn-primary mx-4"
                  disabled={!formik.isValid || formik.isSubmitting}
                >
                  Submit
                </button>
              </Form>
            );
          }}
        </Formik>
      </div>
    </>
  );
};

export default NewFormik;
