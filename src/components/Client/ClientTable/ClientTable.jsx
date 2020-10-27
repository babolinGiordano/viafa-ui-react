import React from "react";

import styles from "./ClientTable.module.css";

import Card from "@material-ui/core/Card";
import Button from "@material-ui/core/Button";
import Checkbox from "@material-ui/core/Checkbox";
import ArrowDownward from "@material-ui/icons/ArrowDownward";
import EditIcon from "@material-ui/icons/Edit";
import DataTable from "react-data-table-component";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";

const MaterialTable = (props) => {
  const columns = [
    {
      name: "ID",
      selector: "id",
      sortable: false,
      omit: true,
    },
    {
      name: "FirstName",
      selector: "firstName",
      sortable: true,
      grow: 2,
    },
    {
      name: "LastName",
      selector: "lastName",
      sortable: true,
    },
    {
      name: "Age",
      selector: "age",
      sortable: true,
      right: true,
    },
    {
      name: "Visits",
      selector: "visits",
      sortable: true,
      right: true,
    },
    {
      name: "Progress",
      selector: "progress",
      sortable: true,
      right: true,
    },
    {
      name: "Status",
      selector: "status",
      sortable: true,
      right: true,
    },
    {
      button: true,
      cell: (row) => <Elimina row={row}></Elimina>,
    },
    {
      button: true,
      cell: (row) => <Modifica row={row}></Modifica>,
    },
  ];

  const sortIcon = <ArrowDownward />;
  const selectProps = { indeterminate: (isIndeterminate) => isIndeterminate };

  const Modifica = ({ row }) => (
    <IconButton
      color="primary"
      component="span"
      onClick={() => props.editClient(row)}
    >
      <EditIcon />
    </IconButton>
  );

  const Elimina = ({ row }) => (
    <Button
      variant="contained"
      color="secondary"
      onClick={() => props.deleteClient(row)}
    >
      <DeleteIcon />
    </Button>
  );

  const customStyles = {
    headCells: {
      style: {
        paddingLeft: "8px",
        paddingRight: "8px",
        fontWeight: "bold",
        fontSize: "1rem",
      },
    },
  };

  return (
    <Card style={{ height: "100%" }} className={styles.MaterialTable}>
      <DataTable
        title="Lista Clienti"
        columns={columns}
        data={props.data}
        highlightOnHover
        sortIcon={sortIcon}
        selectableRowsComponent={Checkbox}
        selectableRowsComponentProps={selectProps}
        onSelectedRowsChange={props.handleChange}
        clearSelectedRows={props.toggleCleared}
        pagination
        customStyles={customStyles}
      />
    </Card>
  );
};

export default MaterialTable;
