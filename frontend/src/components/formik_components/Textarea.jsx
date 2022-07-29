import React from "react";
import { Field, ErrorMessage } from "formik";
import TextError from "./TextError";

function Textarea(props) {
  const { label, name, placeholder, ...rest } = props;
  return (
    <div className="form-group">
      <Field
        className="form-control text-area"
        as="textarea"
        id={name}
        name={name}
        placeholder="text"
        {...rest}
      />
      <label className="form-label" htmlFor={name}>
        {label}
      </label>
      <ErrorMessage component={TextError} name={name} />
    </div>
  );
}

export default Textarea;
