import React from "react";

import Card from "@material-ui/core/Card";
import Button from "@material-ui/core/Button";
import Checkbox from "@material-ui/core/Checkbox";
import ArrowDownward from "@material-ui/icons/ArrowDownward";
import DataTable from "react-data-table-component";
import styles from "./MaterialTable.module.css";

const MaterialTable = (props) => {
  const columns = [
    {
      name: "Name",
      selector: "name",
      sortable: true,
      grow: 2,
    },
    {
      name: "Type",
      selector: "type",
      sortable: true,
    },
    {
      name: "Calories (g)",
      selector: "calories",
      sortable: true,
      right: true,
    },
    {
      name: "Fat (g)",
      selector: "fat",
      sortable: true,
      right: true,
    },
    {
      name: "Carbs (g)",
      selector: "carbs",
      sortable: true,
      right: true,
    },
    {
      name: "Protein (g)",
      selector: "protein",
      sortable: true,
      right: true,
    },
    {
      name: "Sodium (mg)",
      selector: "sodium",
      sortable: true,
      right: true,
    },
    {
      name: "Calcium (%)",
      selector: "calcium",
      sortable: true,
      right: true,
    },
    {
      name: "Iron (%)",
      selector: "iron",
      sortable: true,
      right: true,
    },
    {
      cell: () => (
        <Button variant="contained" color="primary">
          ELIMINA
        </Button>
      ),
      button: true,
    },
    {
      cell: () => (
        <Button variant="contained" color="primary" onClick={props.editClient}>
          MODIFICA
        </Button>
      ),
      button: true,
      width: "110px",
    },
  ];
  const sortIcon = <ArrowDownward />;
  const selectProps = { indeterminate: (isIndeterminate) => isIndeterminate };

  // const deleteAll = () => {
  //   const { selectedRows } = this.state;
  //   const rows = selectedRows.map((r) => r.name);

  //   if (window.confirm(`Are you sure you want to delete:\r ${rows}?`)) {
  //     this.setState((state) => ({
  //       toggleCleared: !state.toggleCleared,
  //       data: differenceBy(state.data, state.selectedRows, "name"),
  //     }));
  //   }
  // };

  // const deleteOne = (row) => {
  //   if (window.confirm(`Are you sure you want to delete:\r ${row.name}?`)) {
  //     const { data } = this.state;
  //     const index = data.findIndex((r) => r === row);

  //     this.setState((state) => ({
  //       toggleCleared: !state.toggleCleared,
  //       data: [...state.data.slice(0, index), ...state.data.slice(index + 1)],
  //     }));
  //   }
  // };

  // const { data, toggleCleared } = this.state;

  return (
    <Card style={{ height: "100%" }} className={styles.MaterialTable}>
      <DataTable
        title="Desserts"
        columns={columns}
        data={props.data}
        selectableRows
        highlightOnHover
        defaultSortField="name"
        // actions={actions}
        // contextActions={contextActions(this.deleteAll)}
        sortIcon={sortIcon}
        selectableRowsComponent={Checkbox}
        selectableRowsComponentProps={selectProps}
        onSelectedRowsChange={props.handleChange}
        clearSelectedRows={props.toggleCleared}
        onRowClicked={props.handleRowClicked}
        pagination
      />
    </Card>
  );
};

export default MaterialTable;
