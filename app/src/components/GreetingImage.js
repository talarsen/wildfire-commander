/* eslint-disable jsx-a11y/alt-text */
import * as React from "react";

import plane from "./plane.jpg";

import "bootstrap/dist/css/bootstrap.min.css";

const GreetingImage = (props) => {
  const greetingImage = {
    display: "block",
    "margin-top": "100px",
    "margin-left": "auto",
    "margin-right": "auto",
    width: "75%",
  };
  return (
    <div style={greetingImage}>
      <img src={plane} style={greetingImage} alt="plane fighting fire" />
    </div>
  );
};

export default GreetingImage;
