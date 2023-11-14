import React from "react";

const Text = (props) => {
  const { children } = props;
  return <div className="textAnimation">{children}</div>;
};
export default Text;
