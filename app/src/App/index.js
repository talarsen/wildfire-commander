import * as React from "react";

// eslint-disable-next-line import/order
import GreetingImage from "../components/GreetingImage";

import Header1 from "../components/Header1";
import Incident from "../components/Incident.js";
import NavBar from "../components/NavBar";

const App = () => {
  const [incidentNumber, setIncidentNumber] = React.useState(null);

  return (
    <>
      <header>
        <Header1 />
      </header>
      <NavBar
        incidentNumber={incidentNumber}
        setIncidentNumber={setIncidentNumber}
      />
      <main style={{ height: "100vh", width: "100vw" }}>
        {incidentNumber === null ? (
          <GreetingImage />
        ) : (
          <Incident incidentNumber={incidentNumber} />
        )}
      </main>
    </>
  );
};

export default App;
