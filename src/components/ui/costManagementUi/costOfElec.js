import React, { useEffect } from "react";

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
import EditIcon from "@material-ui/icons/Edit";
import IconButton from "@material-ui/core/IconButton";

//Custom Components
import ButtonCust from "../../component/ButtonCust";

//Custom useStyles
const useStyles = makeStyles((theme) => ({
  mainGrid: {
    width: "100%",
  },
  table: {
    // minWidth: "100%",
    borderRadius: "25px",
    width: "100%",
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
  tableFinalLine: {
    fontSize: "7pt",
    alignItems: "left",
  },
}));

function createData(name, watt, hours, kwh, cost) {
  return { name, watt, hours, kwh, cost };
}

//Test Data
const elecRows = [
  createData("Quantum Light", 220, 12, 81.84, "219.33"),
  createData("Fan x2", 60, 12, 44.46, "119.64"),
  createData("Extractor", 35, 12, 6.51, "17.45"),
  createData("Air", 4, 12, 2.98, "7.98"),
];

export default function CostOFElec(props) {
  const classes = useStyles();

  useEffect(() => {}, []);

  const dispNewDevice = () => {
    props.setDispNewDevice(!props.dispNewDevice);
    props.setDispCurDevice(!props.dispCurDevice);
  };

  return (
    <Grid container justifyContent="center" className={classes.mainGrid}>
      <Grid item>
        <TableContainer component={Paper}>
          <Table
            className={classes.table}
            size="small"
            aria-label="simple table"
          >
            <TableHead>
              <TableRow className={classes.tableHeader}>
                <TableCell align="center" className={classes.tableFinalLine}>
                  Device
                </TableCell>
                <TableCell align="center" className={classes.tableFinalLine}>
                  Watts
                </TableCell>
                <TableCell align="center" className={classes.tableFinalLine}>
                  Hours
                </TableCell>
                <TableCell align="center" className={classes.tableFinalLine}>
                  kWh/M
                </TableCell>
                <TableCell align="center" className={classes.tableFinalLine}>
                  {props.dispNewDeviceBut ? "Edit" : "Cost"}
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody className={classes.tableBody}>
              {elecRows.map((row, index) => (
                <TableRow key={index}>
                  <TableCell
                    component="th"
                    scope="row"
                    className={classes.tableFinalLine}
                  >
                    {row.name}
                  </TableCell>
                  <TableCell align="right" className={classes.tableFinalLine}>
                    {row.watt}
                  </TableCell>
                  <TableCell align="right" className={classes.tableFinalLine}>
                    {row.hours}
                  </TableCell>
                  <TableCell align="right" className={classes.tableFinalLine}>
                    {row.kwh}
                  </TableCell>
                  <TableCell align="left" className={classes.tableFinalLine}>
                    {props.dispNewDeviceBut ? (
                      <IconButton>
                        <EditIcon style={{ fontSize: "small" }} />
                      </IconButton>
                    ) : (
                      row.cost
                    )}
                  </TableCell>
                </TableRow>
              ))}

              <TableRow className={classes.tableFinalRow}>
                <TableCell
                  className={classes.tableFinalLine}
                  style={{ fontWeight: "bold" }}
                >
                  Total
                </TableCell>
                <TableCell
                  align="right"
                  className={classes.tableFinalLine}
                ></TableCell>
                <TableCell
                  align="right"
                  className={classes.tableFinalLine}
                ></TableCell>
                <TableCell align="right" className={classes.tableFinalLine}>
                  135.79
                </TableCell>
                <TableCell align="right" className={classes.tableFinalLine}>
                  364.4
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>

        {props.dispNewDeviceBut ? (
          <Grid item container justifyContent="center">
            <ButtonCust
              butName="Add New Device"
              buttonWidth="100%"
              variant="contained"
              color="primary"
              onClick={dispNewDevice}
            />
          </Grid>
        ) : null}
      </Grid>
    </Grid>
  );
}
