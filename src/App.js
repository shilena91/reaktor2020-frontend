import React, { useState, useEffect } from "react";
import Packages from "./components/Packages";
import PackageInfo from "./components/PackageInfo";
import TopBar from "./components/TopBar";
import networkService from "./Network/dpkgStatus";

function App() {
  const [packages, setPackages] = useState([]);
  const [pkg, setPkg] = useState(null);
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    networkService
      .getDpkg()
      .then((response) => response.json())
      .then(
        (data) => {
          setIsLoaded(true);
          setPackages(data);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  const handleClick = async (name) => {
    const p = await packages.find((pkg) => pkg.Package === name);
    if (!p) return;
    setPkg(p);
  };

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <div>
        <TopBar />
        <Packages packages={packages} event={handleClick} />
        {pkg === null ? null : <PackageInfo pack={pkg} event={handleClick} />}
      </div>
    );
  }
}

export default App;
