/* 

Przykładowy dictionary symbolizujący jedną ankietę

Property "type" odnosi się do listy:
    ["text", "number", "date", "choise"];

*/

const json_data = {
  title: "Some survey",
  form: [
    {
      question: "What is your email address?",
      type: 0,
      placeholder: "email",
    },
    {
      question: "What do u like to do in your free time?",
      type: 0,
      long: true,
    },
    {
      question: "Fav number?",
      type: 1,
    },
    {
      question: "Bday?",
      type: 2,
    },
    {
      question: "Do u like fish?",
      type: 3,
      options: ["Yes", "No"],
    },
    {
      question: "What do u like?",
      type: 3,
      multiple: true,
      options: ["Cars", "Sport", "Coffe", "Life"],
    },
  ],
};

import React, { useState, useEffect } from "react";
import { Text, Number, Date, Choice } from "./Inputs";
import { Form, Row, Col, Toggle, Icon } from "rsuite";

function useSurveyData(survey) {
  const [state, setState] = useState(survey);

  useEffect(() => console.log(state), [state]);

  function updateInput(idx, value) {
    var newState = [...state];
    newState[idx].value = value;
    setState(newState);
  }

  return [state, updateInput];
}

const generateSurvey = (val, idx, state, updateInput) => {
  return val.type === 0 ? (
    <Text
      key={idx}
      idx={idx}
      props={val}
      value={state[idx].value || ""}
      setValue={updateInput}
    />
  ) : val.type === 1 ? (
    <Number
      key={idx}
      idx={idx}
      props={val}
      value={state[idx].value || ""}
      setValue={updateInput}
    />
  ) : val.type === 2 ? (
    <Date
      key={idx}
      idx={idx}
      props={val}
      value={state[idx].value}
      setValue={updateInput}
    />
  ) : (
    <Choice
      key={idx}
      idx={idx}
      props={val}
      value={state[idx].value}
      setValue={updateInput}
    />
  );
};

/*
 *
 * @param {string} surveyHash
 *
 */
const Survey = ({ surveyHash }) => {
  const [state, updateInput] = useSurveyData(() => {
    // here make a request to backend to get "json_data" of a specified survey
    return json_data.form;
  });
  return (
    <Row
      style={{
        maxWidth: "100vw",
        marginLeft: 16,
        marginRight: 16,
        marginBottom: 48,
        marginTop: 16,
      }}
    >
      <Toggle
        value={
          document.getElementById("pagestyle").href.substr(-15) ===
          "rsuite-dark.css"
        }
        style={{ position: "absolute", right: "2vh", top: "2vh" }}
        onChange={(e) =>
          e
            ? document
                .getElementById("pagestyle")
                .setAttribute("href", "/rsuite-dark.css")
            : document
                .getElementById("pagestyle")
                .setAttribute("href", "/rsuite-default.css")
        }
        checkedChildren={<Icon icon="sun-o" />}
        unCheckedChildren={<Icon icon="moon-o" />}
      />
      <Col xs={24} sm={24} md={8} lg={6} />
      <Col xs={24} sm={12} md={8} lg={12}>
        <h1 style={{ marginBottom: "5vh" }}>{json_data.title}</h1>
        <Form fluid>
          {state.map((val, idx) =>
            generateSurvey(val, idx, state, updateInput)
          )}
        </Form>
      </Col>
      <Col xs={24} sm={12} md={8} lg={6} />
    </Row>
  );
};

export default Survey;
