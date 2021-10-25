import React from "react";

import Dropdown from "react-bootstrap/Dropdown";
import { Link } from "react-router-dom";
// import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";
function ChooseFire({ setIncidentNumber }) {
  const onSelect = (eventKey) => {
    setIncidentNumber(eventKey);
  };
  return (
    <>
      <div>
        <Dropdown onSelect={onSelect}>
          <Dropdown.Toggle
            id="dropdown-button-light-example1"
            variant="secondary"
          >
            Select A Fire
          </Dropdown.Toggle>

          <Dropdown.Menu variant="dark">
            <Link to="/incidentNumber1">
              <Dropdown.Item eventKey={"fire1"}>Fire 1</Dropdown.Item>
            </Link>
            <Link to="incidentNumber2">
              <Dropdown.Item eventKey={"fire2"}>Fire 2</Dropdown.Item>
            </Link>
            <Link to="incidentNumber3">
              <Dropdown.Item eventKey={"fire3"}>Fire 3</Dropdown.Item>
            </Link>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </>
  );
}

export default ChooseFire;
