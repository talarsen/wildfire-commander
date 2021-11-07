import * as React from "react";

import GoogleMapReact from "google-map-react";

import styles from "../App/styles.module.scss";

const IncidentMap = ({ center, zoom }) => {
  console.log(center);
  return (
    <div className={styles.map}>
      <GoogleMapReact
        bootstrapURLKeys={{
          key: process.env.REACT_APP_INCIDENT_MAP,
          language: "en",
        }}
        center={center}
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
  zoom: 8,
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

  const river = [
    { lat: 39.0890294201934, lng: -120.991324919019 },
    { lat: 39.0927770913431, lng: -120.991444640358 },
    { lat: 39.0970211784979, lng: -120.991315755498 },
    { lat: 39.1007221599371, lng: -120.991454351417 },
    { lat: 39.1045071549868, lng: -120.990919656966 },
    { lat: 39.1084105381066, lng: -120.990922944235 },
    { lat: 39.1110133062366, lng: -120.994057385109 },
    { lat: 39.1145312355654, lng: -120.993611572948 },
    { lat: 39.1179830896137, lng: -120.992374114499 },
    { lat: 39.1213335939369, lng: -120.990207005345 },
    { lat: 39.1255041872947, lng: -120.989655975091 },
    { lat: 39.1294468258545, lng: -120.987791642779 },
    { lat: 39.1332934597711, lng: -120.985704486536 },
    { lat: 39.1338907476099, lng: -120.982558396329 },
    { lat: 39.1374478516292, lng: -120.980520124157 },
    { lat: 39.1399865209134, lng: -120.977190748385 },
    { lat: 39.1427894089978, lng: -120.974752461864 },
    { lat: 39.1458346286883, lng: -120.974332893579 },
    { lat: 39.1460897777543, lng: -120.97147982161 },
    { lat: 39.1440946182866, lng: -120.967868897934 },
    { lat: 39.1414621979535, lng: -120.968249551789 },
    { lat: 39.1390886435629, lng: -120.968850792742 },
    { lat: 39.1376267828414, lng: -120.969372146702 },
    { lat: 39.1341191362575, lng: -120.969981782469 },
    { lat: 39.13219563135, lng: -120.968072139547 },
    { lat: 39.1317853100378, lng: -120.963101984312 },
    { lat: 39.1275865438347, lng: -120.963640218344 },
    { lat: 39.1235603070503, lng: -120.964903779443 },
    { lat: 39.1198881421538, lng: -120.963894357254 },
    { lat: 39.1173230167682, lng: -120.966286303672 },
    { lat: 39.1137150173377, lng: -120.965064450424 },
    { lat: 39.1118390294663, lng: -120.968731852587 },
    { lat: 39.1084702237421, lng: -120.97206567415 },
    { lat: 39.1053471782641, lng: -120.975547573244 },
    { lat: 39.1014968480996, lng: -120.976504993347 },
    { lat: 39.0987338461032, lng: -120.976999381241 },
    { lat: 39.0949471416536, lng: -120.978635840103 },
    { lat: 39.0913113666702, lng: -120.980500381482 },
    { lat: 39.0878627051511, lng: -120.983591370314 },
    { lat: 39.0860607104842, lng: -120.988762813924 },
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

  let riverTriangle = new maps.Polygon({
    paths: river,
    strokeColor: "red",
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: "#FF0000",
    fillOpacity: 0.35,
  });
  riverTriangle.setMap(map);
};

export default IncidentMap;
