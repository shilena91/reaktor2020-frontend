import React from "react";

const Package = ({ name, event }) => {
  return <button onClick={() => event(name)}>{name}</button>;
};

export default Package;
