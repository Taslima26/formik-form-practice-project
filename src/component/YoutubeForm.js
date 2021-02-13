import React, { useState, useEffect } from "react";
import { useFormik } from "formik";
import "./YoutubeForm.css";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

const YoutubeForm = () => {
  const initialValues = {
    name: "",
    email: "",
    channel: "",
  };
  const onSubmit = (values) => {
    console.log("Form Data", values);
  };
  const validate = (values) => {
    let errors = {};
    if (!values.name) {
      errors.name = "required";
    }
    if (!values.email) {
      errors.email = "required";
    }
    if (!values.channel) {
      errors.channel = "required";
    }
    return errors;
  };

  const formik = useFormik({
    initialValues,
    onSubmit,
    validate,
  });
  console.log(formik.errors);
  return (
    <div>
      <Grid
        container
        direction="column"
        justify="flex-start"
        alignItems="center"
      >
        <form onSubmit={formik.handleSubmit}>
          <div className="form-control">
            <label htmlFor="name">Name</label>

            <input
              type="text"
              id="name"
              name="name"
              onChange={formik.handleChange}
              value={formik.values.name}
            />
            {formik.errors.name ? (
              <div className="error">{formik.errors.name}</div>
            ) : null}
          </div>
          <div className="form-control">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              id="email"
              name="email"
              onChange={formik.handleChange}
              value={formik.values.email}
            />
            {formik.errors.email ? (
              <div className="error">{formik.errors.email}</div>
            ) : null}
          </div>
          <div className="form-control">
            <label htmlFor="channel">Channel</label>
            <input
              type="text"
              id="channel"
              onChange={formik.handleChange}
              value={formik.values.channel}
            />
            {formik.errors.channel ? (
              <div className="error">{formik.errors.channel}</div>
            ) : null}
          </div>
          <button type="submit">Submit</button>
        </form>
      </Grid>
    </div>
  );
};

export default YoutubeForm;
