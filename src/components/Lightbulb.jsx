import React from "react";
import "./lightbulb.css";

const LightBulb = (props) => {
  return (
    <div>
      <img src={props.url} alt="bulb" />
    </div>
  );
};

export default LightBulb;
