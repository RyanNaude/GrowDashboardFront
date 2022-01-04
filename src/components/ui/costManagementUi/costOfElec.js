import React from "react";

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
    borderRadius: "3pt",
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
  },
}));

export default function CostOFElec(props) {
  const classes = useStyles();
  const elecRows = props.devices;

  var dt = new Date();
  var month = dt.getMonth();
  var year = dt.getFullYear();
  var daysInMonth = new Date(year, month, 0).getDate();

  const dispNewDevice = () => {
    props.setDispNewDevice(!props.dispNewDevice);
    props.setDispCurDevice(!props.dispCurDevice);
  };

  var calcs;
  var totalCost = 0;
  var costRet = {
    kwhDay: 0,
    monthCost: 0,
    totalCost: 0,
  };

  function calcTotals(devName, devWatt, devHrs, devRate) {
    var kwhDay;
    var kwhMonth;
    var monthCost;

    kwhDay = (devWatt * devHrs) / 1000;
    kwhMonth = kwhDay * daysInMonth;
    monthCost = Number((kwhMonth * devRate).toFixed(2));
    totalCost = totalCost + monthCost;

    costRet.kwhDay = kwhDay;
    costRet.monthCost = monthCost;
    costRet.totalCost = totalCost.toFixed(2);

    return costRet;
  }

  const editDevice = (event) => {
    console.log("Edit Device");
    console.log(event.target.id);
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
                <TableCell align="left" className={classes.tableFinalLine}>
                  Device
                </TableCell>
                <TableCell align="right" className={classes.tableFinalLine}>
                  Wattage
                </TableCell>
                <TableCell align="right" className={classes.tableFinalLine}>
                  Hours On
                </TableCell>
                <TableCell align="right" className={classes.tableFinalLine}>
                  kWh/Day
                </TableCell>
                <TableCell align="right" className={classes.tableFinalLine}>
                  {props.dispNewDeviceBut ? "Edit" : "Monthly Cost"}
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody className={classes.tableBody}>
              {elecRows.map(
                (row, index) => (
                  (calcs = calcTotals(
                    row.devName,
                    row.devWatt,
                    row.devHrs,
                    row.devRate
                  )),
                  (
                    <TableRow key={index}>
                      <TableCell
                        component="th"
                        scope="row"
                        align="left"
                        className={classes.tableFinalLine}
                      >
                        {row.devName}
                      </TableCell>
                      <TableCell
                        align="right"
                        className={classes.tableFinalLine}
                      >
                        {row.devWatt}
                      </TableCell>
                      <TableCell
                        align="right"
                        className={classes.tableFinalLine}
                      >
                        {row.devHrs}
                      </TableCell>
                      <TableCell
                        align="right"
                        className={classes.tableFinalLine}
                      >
                        {calcs.kwhDay}
                      </TableCell>
                      <TableCell
                        align="right"
                        className={classes.tableFinalLine}
                      >
                        {props.dispNewDeviceBut ? (
                          <IconButton id={index} onClick={editDevice}>
                            <EditIcon style={{ fontSize: "small" }} />
                          </IconButton>
                        ) : (
                          "R" + calcs.monthCost
                        )}
                      </TableCell>
                    </TableRow>
                  )
                )
              )}

              <TableRow className={classes.tableFinalRow}>
                <TableCell
                  className={classes.tableFinalLine}
                  style={{ fontWeight: "bold" }}
                >
                  Total Cost
                </TableCell>
                <TableCell
                  align="right"
                  className={classes.tableFinalLine}
                ></TableCell>
                <TableCell
                  align="right"
                  className={classes.tableFinalLine}
                ></TableCell>
                <TableCell
                  align="right"
                  className={classes.tableFinalLine}
                ></TableCell>
                <TableCell align="right" className={classes.tableFinalLine}>
                  {calcs ? "R" + calcs.totalCost : null}
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
