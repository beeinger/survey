import React from "react";
import { Input, FormGroup, ControlLabel } from "rsuite";

const Text = ({ props, idx, value, setValue }) => {
  const handleChange = (value) => {
    setValue(idx, value);
  };
  const capitalize = (s) => {
    if (typeof s !== "string") return "";
    return s.charAt(0).toUpperCase() + s.slice(1);
  };
  return (
    <FormGroup>
      <ControlLabel>{props.question}</ControlLabel>
      <Input
        value={value}
        placeholder={props.placeholder ? capitalize(props.placeholder) : "Text"}
        onChange={handleChange}
        componentClass={props.long && "textarea"}
      />
    </FormGroup>
  );
};

export default Text;
