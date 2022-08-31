import * as React from "react";

import styles from "../App/styles.module.scss";
const Header = () => {
  return (
    <>
      <header className={styles.header}>
        <h1 className={styles.headerTitle}>{process.env.REACT_APP_TITLE}</h1>
        <h2 className={styles.headerSubtitle}>
          {process.env.REACT_APP_SUBTITLE}
        </h2>
      </header>
    </>
  );
};

export default Header;
