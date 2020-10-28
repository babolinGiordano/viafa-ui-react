import React from "react";

import TextField from "@material-ui/core/TextField";

import { makeStyles } from "@material-ui/core/styles";
import styles from "./Client.module.css";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(2),
      width: "40ch",
    },
  },
}));

const Client = (props) => {
  const classes = useStyles();
  return (
    <div>
      <h1>NUOVO CLIENTE</h1>
      <form className={classes.root} noValidate autoComplete="off">
        <TextField required label="Ragione Sociale Azienda" />
        <TextField required label="Indirizzo" />
        <TextField required label="Citta'" />
        <TextField required label="CAP" />
        <TextField required label="Telefono" />
        <TextField required label="Mail" />
        <TextField required label="Fax" />
        <TextField required label="Nome Referente" />
        <TextField required label="Telefono Referente" />
        <TextField required label="Mail Referente" />
      </form>
      <div style={{ textAlign: "right" }}>
        <button onClick={props.modalClosed} className={styles.ClientButton}>
          CANCELLA
        </button>
        <button className={styles.ClientButton} disabled>
          SALVA
        </button>
      </div>
    </div>
  );
};

export default Client;
