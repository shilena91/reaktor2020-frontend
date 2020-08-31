import React from "react";
import Package from "./Package";

const Description = ({ rows }) => {
  const arr = rows.split("\n");

  const renderDescription = () =>
    arr.map((row, i) => {
      return <p key={i}>{row}</p>;
    });
  if (renderDescription().length === 0) return null;
  return <div className="description">{renderDescription()}</div>;
};

const Depends = ({ depends, event }) => {
  if (!depends) return <h4>No dependencies</h4>;

  const dependsList = () =>
    depends.map((e, i) => {
      const row = e.map((item, j) => {
        return <Package key={j} name={item.split(" ")[0]} event={event} />;
      });
      return <li key={i}>{row}</li>;
    });

  return (
    <div className="depends">
      <h4>Dependencies</h4>
      <div className="packages">{dependsList()}</div>
    </div>
  );
};

const ReverseDepends = ({ reDepends, event }) => {
  if (!reDepends) {
    return <h4 className="depends">No reverse dependencies</h4>;
  }

  const reverseDependsList = () =>
    reDepends.map((item, i) => {
      return (
        <li key={i}>
          <Package name={item} event={event} />
        </li>
      );
    });

  return (
    <div className="depends">
      <h4>Reverse Dependencies</h4>
      <div className="packages">{reverseDependsList()}</div>
    </div>
  );
};

const PackageInfo = ({ pack, event }) => {
  return (
    <div className="info">
      <h3>{pack.Package}</h3>
      <Description rows={pack.Description} />
      <Depends depends={pack.Depends} event={event} />
      <ReverseDepends reDepends={pack.Reverse_Depends} event={event} />
    </div>
  );
};

export default PackageInfo;
