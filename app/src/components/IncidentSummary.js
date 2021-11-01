import * as React from "react";

import { Icon } from "@iconify/react";

import styles from "../App/styles.module.scss";
import * as apiClient from "../apiClient";

const IncidentSummary = ({ incidentNumber }) => {
  const [incident, setIncident] = React.useState([]);

  const loadIncident = async () =>
    setIncident(await apiClient.getOneIncident(incidentNumber));
  React.useEffect(() => {
    loadIncident();
  }, [incidentNumber]);
  return (
    <>
      <h2>Incident Summary</h2>
      <div className={styles.summaryContainer}>
        <div className={styles.card}>
          <div className={styles.cardIcon}>
            <Icon icon="uiw:date" />{" "}
          </div>
          <div className={styles.cardTitle}>
            <h5>Start Date</h5>
            <h4>{incident.start_date}</h4>
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.cardIcon}>
            {" "}
            <Icon icon="carbon:time" />{" "}
          </div>
          <div className={styles.cardTitle}>
            <h5>Start Time</h5>
            <h4>{incident.start_time}</h4>
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.cardIcon}>
            {" "}
            <Icon icon="mdi:pine-tree-fire" />{" "}
          </div>
          <div className={styles.cardTitle}>
            <h5>Cause</h5>
            <h4>{incident.cause}</h4>
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.cardIcon}>
            {" "}
            <Icon icon="ic:sharp-personal-injury" />{" "}
          </div>
          <div className={styles.cardTitle}>
            <h5>Injuries</h5>
            <h4>{incident.injuries}</h4>
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.cardIcon}>
            {" "}
            <Icon icon="healthicons:death-alt" />{" "}
          </div>
          <div className={styles.cardTitle}>
            <h5>Fatalities</h5>
            <h4>{incident.fatalities}</h4>
          </div>
        </div>
      </div>
    </>
  );
};
export default IncidentSummary;
