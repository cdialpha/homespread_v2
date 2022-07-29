import React from "react";
import { Field, ErrorMessage } from "formik";
import TextError from "./TextError";

function CheckboxGroup(props) {
  const { label, name, options, ...rest } = props;
  return (
    <div className="check-box-group">
      <label>{label}</label>
      <Field className="form-control" name={name}>
        {({ field }) => {
          return options.map((option) => {
            return (
              <div className="check-box-row" key={option.key}>
                <input
                  type="checkbox"
                  id={option.value}
                  {...field}
                  {...rest}
                  value={option.value}
                  checked={field.value.includes(option.value)}
                  style={{ "margin-right": "10px" }}
                />
                <label htmlFor={option.value}>{option.key}</label>
              </div>
            );
          });
        }}
      </Field>
      <ErrorMessage component={TextError} name={name} />
    </div>
  );
}

export default CheckboxGroup;
