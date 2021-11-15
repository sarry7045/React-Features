import React from "react";
import "../Components/Formik.css";
import { useFormik, Form, Field } from "formik";
import { values } from "lodash";
import * as Yup from "yup";
import NewFormik from "./NewFormik";
import FormikContainer from "./FormikContainer";

const initialValues = {
  name: "",
  email: "",
  channel: "",
};

const onSubmit = (values) => {
  console.log("Form data", values);
};
const validate = (values) => {
  let errors = {};
  if (!values.name) {
    errors.name = "Required";
  }
  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid Email Format";
  }
  if (!values.channel) {
    errors.channel = "Required";
  }

  return errors;
};
const validationSchema = Yup.object({
  name: Yup.string().required("Required!"),
  email: Yup.string().email("Invalid Email Format!").required("Required!"),
  channel: Yup.string().required("Required!"),
});

const Formik = () => {
  const formik = useFormik({
    initialValues,
    onSubmit,
    // validate,
    validationSchema,
  });

  console.log("Visited Feilds", formik.touched);

  return (
    <>
      <h4 className="text-center my-4"> Advance Forms Using Formik and Yup:</h4>
      <div className="container my-5">
        <br />
        <div className="formik">
          <form onSubmit={formik.handleSubmit}>
            <div className="form-controll">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                onChange={formik.handleChange}
                value={formik.values.name}
                onBlur={formik.handleBlur}
              />
              {formik.touched.name && formik.errors.name ? (
                <div className="error">{formik.errors.name} </div>
              ) : null}
            </div>
            <div className="form-controll">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                onChange={formik.handleChange}
                value={formik.values.email}
                onBlur={formik.handleBlur}
              />
              {formik.touched.email && formik.errors.email ? (
                <div className="error">{formik.errors.email} </div>
              ) : null}
            </div>
            <div className="form-controll">
              <label htmlFor="channel">Channel</label>
              <input
                type="text"
                id="channel"
                name="channel"
                onChange={formik.handleChange}
                value={formik.values.channel}
                onBlur={formik.handleBlur}
              />
              {formik.touched.channel && formik.errors.channel ? (
                <div className="error">{formik.errors.channel} </div>
              ) : null}
            </div>
            <button type="submit" className="btn btn-primary my-4 text-center">
              Submit Data
            </button>
          </form>
        </div>
      </div>
      <NewFormik />
      <FormikContainer />
    </>
  );
};

export default Formik;
