import React from "react";
import Package from "./Package";

const Packages = ({ packages, event }) => {
  packages.sort((first, second) => {
    return first["Package"].localeCompare(second["Package"]);
  });

  const rows = () => {
    return packages.map((pkg, i) => {
      return (
        <li key={i}>
          <Package name={pkg.Package} event={event} />
        </li>
      );
    });
  };

  if (rows().length === 0) {
    return (
      <div>
        <p>No packages found</p>
      </div>
    );
  }

  return <div className="packages">{rows()}</div>;
};

export default Packages;
