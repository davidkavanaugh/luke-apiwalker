import React from "react";
import ObiWan from "./images/obiwan.png";
const NotFound = (props) => {
  return (
    <div>
      <h2>404 -- These aren't the droids you're looking for.</h2>
      <img src={ObiWan} alt="These are not the droids you're looking for" />
    </div>
  );
};

export default NotFound;
