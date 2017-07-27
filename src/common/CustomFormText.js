import React from 'react';

const CustomFormText = ({ input, label, type, id, textarea, meta, disabled }) => {

  return (
    <div className={`form-group has-${meta.error ? "error" : "default"}`}>
      <label className="form-control-label" htmlFor={id}>{label}</label>
      <input disabled={disabled} {...input} placeholder={label} type={type} className="form-control" id={id}/>
        {meta.touched && ((meta.error && <div className="form-control-feedback">{meta.error}</div>) || (meta.warning && <div>{meta.warning}</div>))}
    </div>
  )
};

export default CustomFormText;
