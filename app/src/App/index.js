import * as React from "react";

import { Routes, Route } from "react-router-dom";
// import Tasks from "../Tasks";

import Header1 from "../components/Header1";
import Incident from "../components/Incident.js";
// import IncidentMap from "../components/IncidentMap";
import NavBar from "../components/NavBar";

const App = () => {
  const [incidentNumber, setIncidentNumber] = React.useState(54321);

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
        <Incident incidentNumber={incidentNumber} />
        <Routes>
          <Route exact path="/incident1" render={incidentNumber} />
          <Route exact path="/incident2" render={incidentNumber} />
          <Route exact path="/incident3" render={incidentNumber} />
        </Routes>
      </main>
    </>
  );
};
// const incidentNumber = () => (
//   <>
//     <h1> This is incident 1</h1>
//   </>
// );

export default App;
