import React from "react";
import {
  Radio,
  Checkbox,
  RadioGroup,
  CheckboxGroup,
  FormGroup,
  ControlLabel,
} from "rsuite";

const Choice = ({ props, idx, value, setValue }) => {
  const handleChange = (value) => {
    setValue(idx, value);
  };
  return (
    <FormGroup>
      <ControlLabel>{props.question}</ControlLabel>
      {props.multiple ? (
        <CheckboxGroup onChange={handleChange}>
          {props.options ? (
            props.options.map((val, idx) => (
              <Checkbox key={idx} value={val}>
                {val}
              </Checkbox>
            ))
          ) : (
            <p>No choices</p>
          )}
        </CheckboxGroup>
      ) : (
        <RadioGroup onChange={handleChange}>
          {props.options ? (
            props.options.map((val, idx) => (
              <Radio key={idx} value={val}>
                {val}
              </Radio>
            ))
          ) : (
            <p>No choices</p>
          )}
        </RadioGroup>
      )}
    </FormGroup>
  );
};

export default Choice;
