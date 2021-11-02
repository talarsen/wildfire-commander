import * as React from "react";

import GoogleMapReact from "google-map-react";

import styles from "../App/styles.module.scss";

const IncidentMap = ({ center, zoom }) => {
  // console.log(center);
  return (
    <div className={styles.map}>
      <GoogleMapReact
        bootstrapURLKeys={{
          key: process.env.REACT_APP_INCIDENT_MAP,
          language: "en",
        }}
        defaultCenter={center}
        defaultZoom={zoom}
        yesIWantToUseGoogleMapApiInternals //this is important!
        onGoogleApiLoaded={({ map, maps }) => handleApiLoaded(map, maps)}
      ></GoogleMapReact>
    </div>
  );
};

IncidentMap.defaultProps = {
  center: {
    lat: 40.01,
    lng: -121.23,
  },
  zoom: 6,
};

const handleApiLoaded = (map, maps) => {
  const polygon = [
    { lat: 40.01, lng: -121.23 },
    { lat: 39.93, lng: -120.539 },
    { lat: 39.92, lng: -120.05 },
    { lat: 40.28, lng: -120.54 },
    { lat: 40.59, lng: -121.13 },
    { lat: 40.68, lng: -121.38 },
    { lat: 40.01, lng: -121.23 },
  ];

  const caldor = [
    { lat: 38.73, lng: -120.53 },
    { lat: 38.69, lng: -120.53 },
    { lat: 38.83, lng: -120.04 },
    { lat: 38.73, lng: -120.53 },
  ];

  let bermudaTriangle = new maps.Polygon({
    paths: polygon,
    strokeColor: "red",
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: "#FF0000",
    fillOpacity: 0.35,
  });
  bermudaTriangle.setMap(map);

  let caldorTriangle = new maps.Polygon({
    paths: caldor,
    strokeColor: "red",
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: "#FF0000",
    fillOpacity: 0.35,
  });
  caldorTriangle.setMap(map);
};

export default IncidentMap;
