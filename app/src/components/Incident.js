import * as React from "react";

import styles from "../App/styles.module.scss";
import * as apiClient from "../apiClient";

import IncidentMap from "./IncidentMap";
import IncidentSummary from "./IncidentSummary";
import Weather from "./Weather";
const Incident = ({ incidentNumber }) => {
  const [incident, setIncident] = React.useState(null);
  const [weatherData, setWeatherData] = React.useState([]);
  const loadIncident = async () =>
    setIncident(await apiClient.getOneIncident(incidentNumber));
  React.useEffect(() => {
    loadIncident();
  }, [incidentNumber]);

  /*Open Weather API*/
  React.useEffect(() => {
    const fetchData = async () => {
      if (incident !== null)
        await fetch(
          `https://api.openweathermap.org/data/2.5/weather?lat=${incident.lat}&lon=${incident.lng}&units=imperial&APPID=${process.env.REACT_APP_OPENWEATHER_API_KEY}`,
        )
          .then((res) => res.json())
          .then((result) => {
            setWeatherData(result);
          });
    };
    fetchData();
  }, [incident, incident?.lat, incident?.lng]);
  if (incident === null) {
    return (
      <div>
        <h1>loading</h1>
      </div>
    );
  }
  return (
    <>
      <div className={styles.incidentPageContainer}>
        <div>
          <h1 className={styles.incidentTitle}>{incident.incident_name}</h1>
        </div>
        <div>
          <h3 className={styles.incidentNumber}>
            CA-BTU-00{incident.incident_number}
          </h3>
        </div>
        <IncidentMap
          center={{
            lat: parseFloat(incident.lat),
            lng: parseFloat(incident.lng),
          }}
          incidentNumber={incidentNumber}
        />
        <IncidentSummary incidentNumber={incidentNumber} />
        <div className="App">
          {typeof weatherData.main != "undefined" ? (
            <Weather weatherData={weatherData} />
          ) : (
            <div></div>
          )}
        </div>
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
