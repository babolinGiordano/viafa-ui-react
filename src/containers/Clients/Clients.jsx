import React, { Component, Fragment } from "react";

import styles from "./Clients.module.css";

import Modal from "../../components/UI/Modal/Modal";
import MaterialTable from "../../components/MaterialTable/MaterialTable";
import makeData from "../../utils/MakeData";

class Clients extends Component {
  state = {
    newClient: false,
    selectedRows: null,
    toggleCleared: false,
    data: makeData(100),
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
    alert("pippo");
  };

  editClientHandler = (row) => {
    this.setState({ selectedRows: row });
    console.log(this.state.selectedRows);
    this.setState({ newClient: true });
  };

  deleteClientHandler = (row) => {
    alert(row.id);
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
            editClient={this.editClientHandler}
            deleteClient={this.deleteClientHandler}
          ></MaterialTable>
        </div>
      </Fragment>
    );
  }
}

export default Clients;