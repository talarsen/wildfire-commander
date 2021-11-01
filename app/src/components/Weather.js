import React from "react";

import { Icon } from "@iconify/react";

import styles from "../App/styles.module.scss";

const Weather = ({ weatherData }) => {
  return (
    <>
      <div className={styles.weatherContainer}>
        <div>
          <h2 className={styles.weatherHeading}> Current Lat/Long Weather</h2>
        </div>
        <div className={styles.weatherCard}>
          <div className={styles.weatherCardTitle}>
            <h5>
              Location:
              <span>
                <h6>{weatherData.name}</h6>
              </span>
            </h5>
          </div>
          <div className={styles.weatherCardTitle}>
            <h5>
              Temperature:<h6>{weatherData.main.temp} degrees</h6>
            </h5>
          </div>
          <div className={styles.weatherCardTitle}>
            <h5>
              Wind Speed:<h6>{weatherData.wind.speed}</h6>
            </h5>
          </div>
          <div className={styles.weatherCardTitle}>
            <h5>
              Humidity:<h6>{weatherData.main.humidity}</h6>
            </h5>
          </div>
          <div className={styles.weatherCardTitle}>
            <h5>
              Description:<h6>{weatherData.weather[0].description}</h6>
            </h5>
          </div>
        </div>
      </div>
    </>
  );
};

export default Weather;
