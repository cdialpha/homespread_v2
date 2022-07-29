import React from "react";

const FileUpload = ({ field, form }) => {
  const handleChange = async (e) => {
    const file = e.currentTarget.files[0];
    const reader = new FileReader();

    reader.readAsDataURL(file);
    let base64String;

    reader.onload = await function (event) {
      base64String = event.target?.result;
      form.setFieldValue(field.name, base64String);
    };
  };
  return (
    <div>
      <input
        type={"file"}
        onChange={(o) => handleChange(o)}
        className="form-control"
      />
    </div>
  );
};

export default FileUpload;
