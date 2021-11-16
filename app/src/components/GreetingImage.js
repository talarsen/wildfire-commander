/* eslint-disable jsx-a11y/alt-text */
import * as React from "react";

import styles from "../App/styles.module.scss";

import forestFire from "./forestFire.png";
import "bootstrap/dist/css/bootstrap.min.css";

const GreetingImage = (props) => {
  return (
    <div className={styles.greetingImageDiv}>
      <img
        src={forestFire}
        className={styles.greetingImage}
        alt="plane fighting fire"
      />
    </div>
  );
};

export default GreetingImage;
