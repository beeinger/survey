import React from "react";
import { DatePicker, FormGroup, ControlLabel } from "rsuite";

const Date = ({ props, idx, value, setValue }) => {
  const handleChange = (value) => {
    setValue(idx, value);
  };
  return (
    <FormGroup>
      <ControlLabel>{props.question}</ControlLabel>
      <DatePicker value={value} onChange={handleChange} />
    </FormGroup>
  );
};

export default Date;
