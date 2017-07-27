import React from 'react';

const CustomFormSelect = ({ input, label, type, id, items, meta }) => {
  let renderSelectOptions = (item) => (
    <option key={item.key} value={item.value}>{item.value}</option>
  );

  return (
    <div className={`form-group has-${meta.error ? "error" : "default"}`}>
      <label className="form-control-label" htmlFor={id}>{label}</label>
      <select {...input} className="form-control">
        <option key="0" value="">Select</option>
        {items.map(renderSelectOptions)}
      </select>
    </div>
  );
};

export default CustomFormSelect;
