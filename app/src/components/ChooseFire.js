import React from "react";

import Dropdown from "react-bootstrap/Dropdown";
import { Link } from "react-router-dom";

import * as apiClient from "../apiClient";
// import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";
function ChooseFire({ setIncidentNumber }) {
  const [incidents, setIncidents] = React.useState([]);

  const loadIncidents = async () =>
    setIncidents(await apiClient.getIncidents());
  React.useEffect(() => {
    loadIncidents();
  }, []);
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
            {incidents.map((incident) => (
              <Link to="">
                <Dropdown.Item eventKey={incident.incident_number}>
                  {incident.incident_name}
                </Dropdown.Item>
              </Link>
            ))}
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </>
  );
}

export default ChooseFire;
