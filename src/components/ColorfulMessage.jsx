import React from "react";

const ColorfulMessage = (props) => {
  const { color, children } = props;
  const contentStyle = {
    color,
    fontSize: "14px",
  };

  return <p style={contentStyle}>{children}</p>;
};

export default ColorfulMessage;
