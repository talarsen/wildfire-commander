import React from "react";

import { Icon } from "@iconify/react";

import styles from "../App/styles.module.scss";

const Weather = ({ weatherData }) => {
  let weatherIcon = null;

  if (weatherData.weather[0].main === "Thunderstorm") {
    weatherIcon = <Icon icon="uil:thunderstorm" />;
  } else if (weatherData.weather[0].main === "Drizzle") {
    weatherIcon = <Icon icon="bi:cloud-drizzle" />;
  } else if (weatherData.weather[0].main === "Rain") {
    weatherIcon = <Icon icon="bx:bx-cloud-rain" />;
  } else if (weatherData.weather[0].main === "Snow") {
    weatherIcon = <Icon icon="bi:cloud-snow" />;
  } else if (weatherData.weather[0].main === "Clear") {
    weatherIcon = <Icon icon="fontisto:sun" />;
  } else if (weatherData.weather[0].main === "Clouds") {
    weatherIcon = <Icon icon="bi:clouds" />;
  } else if (weatherData.weather[0].main === "Haze") {
    weatherIcon = <Icon icon="bi:cloud-haze-1" />;
  }

  return (
    <>
      <h2> Current Lat/Long Weather</h2>
      <div className={styles.weatherContainer}>
        <div className={styles.weatherCard}>
          <div className={styles.weatherCardTitle}>
            <p>{weatherData.name}</p>
          </div>
          <div className={styles.weatherCardTitle}>
            <h4>{weatherData.main.temp} &deg;F</h4>
          </div>
          <div className={styles.weatherCardTitle}>
            <h5>
              Wind:&nbsp;
              <span className={styles.weatherSubtitle}>
                {weatherData.wind.speed} mph
              </span>{" "}
            </h5>
          </div>
          <div className={styles.weatherCardTitle}>
            <h5>
              Humidty:&nbsp;
              <span className={styles.weatherSubtitle}>
                {weatherData.main.humidity}%
              </span>
            </h5>
          </div>
          <div className={styles.weatherCardTitle}>
            <h5>
              Description:
              <span className={styles.weatherSubtitle}>
                {" "}
                {weatherData.weather[0].description}
                <span> {weatherIcon}</span>
              </span>
            </h5>
          </div>
        </div>
      </div>
    </>
  );
};

export default Weather;
