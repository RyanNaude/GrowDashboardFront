import React, { useEffect } from "react";
// import { useState } from "react";
// import clsx from "clsx";

//Material UI Components
import { makeStyles } from "@material-ui/core/styles";

import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

//Custom useStyles
const useStyles = makeStyles((theme) => ({
  table: {
    minWidth: "100%",
    borderRadius: "25px",
  },
  tableHeader: {
    backgroundColor: theme.palette.primary.light,
  },
  tableBody: {
    backgroundColor: theme.palette.secondary.main,
  },
  tableFinalRow: {
    backgroundColor: theme.palette.primary.main,
  },
}));

function createData(name, kwh, cost) {
  return { name, kwh, cost };
}

//Test Data
const elecRows = [
  createData("Quantum Light", 81.84, "R 219.33"),
  createData("Fan x2", 44.64, "R 119.64"),
  createData("Extractor", 6.51, "R 17.45"),
];

export default function CostOFElec(props) {
  const classes = useStyles();

  useEffect(() => {}, []);

  return (
    <Grid container justifyContent="center">
      <Grid item>
        <TableContainer component={Paper}>
          <Table
            className={classes.table}
            size="small"
            aria-label="simple table"
          >
            <TableHead>
              <TableRow className={classes.tableHeader}>
                <TableCell>Appliance</TableCell>
                <TableCell align="right">kWh / Month</TableCell>
                <TableCell align="right">Monthly Cost</TableCell>
              </TableRow>
            </TableHead>
            <TableBody className={classes.tableBody}>
              {elecRows.map((row, index) => (
                <TableRow key={index}>
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="right">{row.kwh}</TableCell>
                  <TableCell align="right">{row.cost}</TableCell>
                </TableRow>
              ))}
              <TableRow className={classes.tableFinalRow}>
                <TableCell>Total</TableCell>
                <TableCell align="right">132.99</TableCell>
                <TableCell align="right">R 356.41</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
    </Grid>
  );
}
