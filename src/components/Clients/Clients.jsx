import React, { Component, Fragment } from "react";

import styles from "./Clients.module.css";
import Modal from "../UI/Modal/Modal";
import MaterialTable from "../MaterialTable/MaterialTable";
import makeData from "../../utils/MakeData";

class Clients extends Component {
  state = {
    newClient: false,
    selectedRows: [],
    toggleCleared: false,
    data: makeData(20),
  };

  newClientHandler = () => {
    this.setState({ newClient: true });
  };

  newClientCancelHandler = () => {
    this.setState({ newClient: false });
  };

  handleChange = (state) => {
    this.setState({ selectedRows: state.selectedRows });
  };

  handleRowClicked = (row) => {
    console.log(`${row.name} was clicked!`);
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
          <MaterialTable
            toggleCleared={this.state.toggleCleared}
            data={this.state.data}
            handleChange={this.handleChange}
            handleRowClicked={this.handleRowClicked}
          ></MaterialTable>
        </div>
      </Fragment>
    );
  }
}

export default Clients;
