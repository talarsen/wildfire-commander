import * as React from "react";

import styles from "../App/styles.module.scss";

import IncidentMap from "./IncidentMap";
const Incident = ({ incidentNumber }) => {
  return (
    <>
      <div>
        <h1 className={styles.incidentTitle}>Dixie Fire</h1>
      </div>
      <div>
        <h3 className={styles.incidentNumber}>12345</h3>
      </div>
      <div className={styles.incidentMap}>
        <IncidentMap incidentNumber={incidentNumber} />
      </div>
    </>
  );
};

export default Incident;
