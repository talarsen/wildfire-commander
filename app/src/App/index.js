import * as React from "react";

import { Routes, Route, NavLink } from "react-router-dom";

// import Tasks from "../Tasks";
import Header1 from "../components/Header1";

// import styles from "./styles.module.scss";

const App = () => (
  <>
    <header>
      <Header1 />
    </header>
    <main>
      {/* <nav className={styles.nav}>
        <NavLink to="/" end>
          Home
        </NavLink>{" "}
        | <NavLink to="dashboard">Dashboard</NavLink>
      </nav> */}
      <Routes>
        {/* <Route path="/" element= /> */}
        {/* <Route path="/" element={<Dashboard />} /> */}
      </Routes>
    </main>
  </>
);
// const Home = () => (
//   <>
//     <header className={styles.header}>
//       <h1 className={styles.headingText}>{process.env.REACT_APP_TITLE}</h1>
//       {/* <p className={styles.subtitle}>{process.env.REACT_APP_SUBTITLE}</p> */}
//     </header>
//     {/* <Tasks /> */}
//   </>
// );
const Dashboard = () => (
  <>
    <h1>Dashboard</h1>
  </>
);

export default App;
