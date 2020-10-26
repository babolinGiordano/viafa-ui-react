import React, { Component, Fragment } from "react";

import styles from "./Clients.module.css";
import Modal from "../UI/Modal/Modal";

class Clients extends Component {
  state = {
    newClient: false,
  };

  newClientHandler = () => {
    this.setState({ newClient: true });
  };

  newClientCancelHandler = () => {
    this.setState({ newClient: false });
  };

  render() {
    return (
      <Fragment>
        <Modal
          show={this.state.newClient}
          modalClosed={this.newClientCancelHandler}
        >
          <p>FORM INSERIMENTO NUOVO CLIENTE</p>
        </Modal>
        <div className={styles.Clients}>
          <button className={styles.NewClient} onClick={this.newClientHandler}>
            AGGIUNGI CLIENTE
          </button>
          <div>Tabella clienti</div>
        </div>
      </Fragment>
    );
  }
}

export default Clients;
