import React from "react";

//Material UI Components
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { Button } from "@material-ui/core";

//Material UI Icons
import AddIcon from "@material-ui/icons/Add";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import RemoveIcon from "@material-ui/icons/Remove";

//Custom useStyles
const useStyles = makeStyles((theme) => ({
  yearDisplay: { fontWeight: "medium" },
  root: {},
  title: {
    fontSize: 12,
    fontWeight: "bold",
  },
  calanderDay: {
    margin: "0.1em",
    border: "1px solid",
    height: "2em",
    width: "1em",
  },
  monthGrid: {
    marginTop: "0.5em",
  },
  calanderGrid: {
    backgroundColor: theme.palette.primary.main,
    paddingBottom: "0.3em",
    paddingRight: "0.3em",
    paddingLeft: "0.3em",
    marginTop: "0.5em",
    marginBottom: "0.5em",
    borderRadius: "3px",
  },
  dayPaper: {
    backgroundColor: theme.palette.secondary.Light,
    height: "2em",
  },
  newEntryBut: {
    backgroundColor: theme.palette.secondary.main,
    marginLeft: "2em",
  },
}));

//Test Data
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const d = new Date();
var monthCnt = d.getMonth();
var year = d.getFullYear();
var daysInMonth = new Date(year, monthCnt, 0).getDate();

export default function CalanderMonth(props) {
  const classes = useStyles();

  const nextMonth = () => {
    var d = new Date();
    d.setMonth(monthCnt + 1);
    monthCnt = d.getMonth();
    if (monthCnt === 0) {
      d.setFullYear(year + 1);
      year = d.getFullYear();
    }
    daysInMonth = new Date(year, monthCnt + 1, 0).getDate();
    props.setYearState(year);
    const month = months[monthCnt];
    props.setMonthState(month);
  };

  const prevMonth = () => {
    var d = new Date();
    d.setMonth(monthCnt - 1);
    monthCnt = d.getMonth();
    if (monthCnt === 11) {
      d.setFullYear(year - 1);
      year = d.getFullYear();
    }
    daysInMonth = new Date(year, monthCnt + 1, 0).getDate();
    props.setYearState(year);
    const month = months[monthCnt];
    props.setMonthState(month);
  };

  const monthDays = [];
  for (let i = 0; i < daysInMonth; i++) {
    monthDays.push(i + 1);
  }

  const viewEntries = () => {
    console.log("View Entry for selected day");
  };

  const newEntry = () => {
    props.setNewCalEntry(!props.newCalEntry);
  };

  return (
    <Grid container justifyContent="center" className={classes.calanderGrid}>
      <Grid
        item
        container
        justifyContent="flex-start"
        alignItems="center"
        style={{ marginTop: "1em" }}
      >
        <Grid item>
          <ArrowBackIosIcon onClick={prevMonth} />
        </Grid>
        <Grid
          item
          container
          direction="row"
          alignItems="center"
          justifyContent="flex-end"
          style={{ width: "55%" }}
        >
          <Grid item container style={{ width: "65%" }} alignItems="flex-end">
            <Typography variant="h5" style={{ width: "100%" }}>
              {props.monthState}
            </Typography>{" "}
          </Grid>
          <Grid item>
            <Typography style={{ marginLeft: "5px", marginRight: "5px" }}>
              |
            </Typography>
          </Grid>
          <Grid item>
            <Typography className={classes.yearDisplay}>
              {props.yearState}
            </Typography>
          </Grid>
        </Grid>
        <Grid item>
          <ArrowForwardIosIcon onClick={nextMonth} />
        </Grid>
        <Grid item>
          <Button
            variant="outlined"
            onClick={newEntry}
            className={classes.newEntryBut}
          >
            {props.newCalEntry ? <RemoveIcon /> : <AddIcon />}
          </Button>
        </Grid>
      </Grid>

      <Grid item container justifyContent="center" style={{border: "1pt solid"}}>
        {/* <Grid item container justifyContent="flex-start" className={classes.monthGrid} style={{border: "1pt solid"}}> */}
          {monthDays.map((data, index) => (
            <Grid item className={classes.calanderDay} key={index} xs={1}>
              {/* <Paper
                variant="outlined"
                className={classes.dayPaper}
                onClick={viewEntries}
              >
                <Typography
                  className={classes.title}
                  color="textSecondary"
                  gutterBottom
                >
                  {data}
                </Typography>
              </Paper> */}
            </Grid>
          ))}
        {/* </Grid> */}
      </Grid>
    </Grid>
  );
}
