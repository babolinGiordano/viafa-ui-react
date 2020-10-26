import React from "react";

import styles from "./NavigationItems.module.css";
import NavigationItem from "./NavigationItem/NavigationItem";

const NavigationItems = () => {
  return (
    <ul className={styles.NavigationItems}>
      <NavigationItem link="/">Autisti</NavigationItem>
      <NavigationItem link="/" active>
        Clienti
      </NavigationItem>
      <NavigationItem link="/">Mezzi</NavigationItem>
      <NavigationItem link="/">Viaggi</NavigationItem>
      <NavigationItem link="/">Fatture</NavigationItem>
      <NavigationItem link="/">Login</NavigationItem>
    </ul>
  );
};

export default NavigationItems;
