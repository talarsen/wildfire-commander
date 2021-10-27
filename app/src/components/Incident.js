import * as React from "react";

import styles from "../App/styles.module.scss";
import * as apiClient from "../apiClient";

import IncidentMap from "./IncidentMap";
const Incident = ({ incidentNumber }) => {
  const [incident, setIncident] = React.useState([]);

  const loadIncident = async () =>
    setIncident(await apiClient.getOneIncident(incidentNumber));
  React.useEffect(() => {
    loadIncident();
  }, [incidentNumber]);

  return (
    <>
      <div>
        <div>
          <h1 className={styles.incidentTitle}>{incident.incident_name}</h1>
        </div>
        <div>
          <h3 className={styles.incidentNumber}>{incident.incident_number}</h3>
        </div>
      </div>
      <div className={styles.incidentMap}>
        <IncidentMap incidentNumber={incidentNumber} />
      </div>
    </>
  );
};

// const IncidentList = ({ incident }) => {
//   // const incident_number = incident.filter((incident) => {
//   //   return incident.incident_number === 54321;
//   // });
//   // console.log(incident_number);

//   return (
//     <div>
//       {incident_number.map((incident) => (
//         <>
//           <div>
//             <h1 className={styles.incidentTitle}>Dixie</h1>
//           </div>
//           <div>
//             <h3 className={styles.incidentNumber}>12345</h3>
//           </div>
//         </>
//       ))}
//     </div>
//   );
// };
export default Incident;
