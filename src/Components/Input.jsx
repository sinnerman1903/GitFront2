import React from "react";

export default function Input(props) {
    const {label,error,name,onChangeFunc,type} = props;
    const className =error ? "form-control is-invalid" : "form-control";
  return (
    <div className="form-group">
      <label>{label}</label>
      <input className={className} name={name} onChange={onChangeFunc} type={type}  />
      <div className="invalid-feedback">{props.error}</div>
    </div>
  );
}
