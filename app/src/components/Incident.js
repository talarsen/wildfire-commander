import * as React from "react";

import styles from "../App/styles.module.scss";
import * as apiClient from "../apiClient";

import IncidentMap from "./IncidentMap";
import IncidentSummary from "./IncidentSummary";
import Weather from "./Weather";
const Incident = ({ incidentNumber }) => {
  const [incident, setIncident] = React.useState([]);
  const [lat, setLat] = React.useState([]);
  const [long, setLong] = React.useState([]);
  const [weatherData, setWeatherData] = React.useState([]);
  const loadIncident = async () =>
    setIncident(await apiClient.getOneIncident(incidentNumber));
  React.useEffect(() => {
    loadIncident();
  }, [incidentNumber]);

  /*Open Weather API*/
  React.useEffect(() => {
    const fetchData = async () => {
      navigator.geolocation.getCurrentPosition(function (position) {
        setLat(position.coords.latitude);
        setLong(position.coords.longitude);
      });
      await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&units=imperial&APPID=${process.env.REACT_APP_OPENWEATHER_API_KEY}`,
      )
        .then((res) => res.json())
        .then((result) => {
          setWeatherData(result);
          console.log(result);
        });
    };
    fetchData();
  }, [lat, long]);
  return (
    <>
      <div>
        <div>
          <h1 className={styles.incidentTitle}>{incident.incident_name}</h1>
        </div>
        <div>
          <h3 className={styles.incidentNumber}>
            CA-BTU-00{incident.incident_number}
          </h3>
        </div>
      </div>
      <IncidentSummary incidentNumber={incidentNumber} />
      <div className="App">
        {typeof weatherData.main != "undefined" ? (
          <Weather weatherData={weatherData} />
        ) : (
          <div></div>
        )}
      </div>
      <IncidentMap incidentNumber={incidentNumber} />
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
