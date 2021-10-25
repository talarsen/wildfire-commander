/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/aria-role */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from "react";

import { Link } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import styles from "../App/styles.module.scss";

import ChooseFire from "./ChooseFire";

// import Dropdown from "./Dropdown";

function NavBar() {
  const [incidentNumber, setIncidentNumber] = useState(null);
  return (
    <>
      <nav className={styles.navbar}>
        <ChooseFire setIncidentNumber={setIncidentNumber} />
      </nav>
      {incidentNumber}
    </>
  );
}

export default NavBar;
