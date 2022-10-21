import React from "react";

const Alert = ({type, text}) => {
  return (
    <div class={`alert alert-${type}`} role="alert">
      {text}
    </div>
  );
};

export default Alert;
