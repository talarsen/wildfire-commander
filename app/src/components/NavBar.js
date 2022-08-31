/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/aria-role */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import styles from "../App/styles.module.scss";

import ChooseFire from "./ChooseFire";
function NavBar({ setIncidentNumber }) {
  return (
    <>
      <nav className={styles.navbar}>
        <ChooseFire setIncidentNumber={setIncidentNumber} />
      </nav>
    </>
  );
}

export default NavBar;
