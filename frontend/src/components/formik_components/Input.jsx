import React from "react";
import { Field, ErrorMessage } from "formik";
import TextError from "./TextError";

function Input(props) {
  const { label, name, ...rest } = props;
  return (
    <div className="form-group">
      <Field className="form-control" id={name} name={name} {...rest} />
      <label className="form-label" htmlFor={name}>
        {label}
      </label>
      <ErrorMessage component={TextError} name={name} />
    </div>
  );
}

export default Input;
