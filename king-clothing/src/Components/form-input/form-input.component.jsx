import React from "react";

import "./form-input.styles.scss";

const FormInput = ({ handleChange, label, ...otherProps}) => (
  <div className="group">
    <input type="text" className="form-input"/>
    {
      label ? (<label className={`${otherProps.value.legnth ? "shrink" : ""} form-input-label`}>
        {label}
      </label>) 
      : null
    }
  </div>
)

export default FormInput;