  /* 
  This component is rendering the page according to the fire incident number. It is also fetching data from the Open Weather API to render to location based off 
  of the lat/long of the fire. I am most proud of this component because it was a struggle to learn how the UseEffect hook worked in conjunction with fetching data. 
  Also, I love that the major features of the app come together in this component... 
  the fire perimeter map, the fire summary and the current weather in the fire location.
  */

import * as React from "react";

import styles from "../App/styles.module.scss";
import * as apiClient from "../apiClient";

import IncidentMap from "./IncidentMap";
import IncidentSummary from "./IncidentSummary";
import Weather from "./Weather";
const Incident = ({ incidentNumber }) => {
  const [incident, setIncident] = React.useState(null);
  const [weatherData, setWeatherData] = React.useState([]);

  React.useEffect(() => {
    const loadIncident = async () =>
      setIncident(await apiClient.getOneIncident(incidentNumber));
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
export default Incident;
